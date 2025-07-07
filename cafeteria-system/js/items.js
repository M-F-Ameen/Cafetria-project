   // Inventory Table Functionality
   document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const itemRows = document.querySelectorAll('.item-row');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        itemRows.forEach(row => {
            const itemName = row.querySelector('.item-name').textContent.toLowerCase();
            const itemType = row.querySelector('.type-badge').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm) || itemType.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        
        currentPage = 1;
        showCurrentPage();
        updatePagination();
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-filter');
            
            itemRows.forEach(row => {
                const itemType = row.getAttribute('data-type');
                
                if (filterType === 'all' || itemType === filterType) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            currentPage = 1;
            showCurrentPage();
            updatePagination();
        });
    });
    
    // Edit button functionality
    const editButtons = document.querySelectorAll('.action-btn.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const itemName = row.querySelector('.item-name').textContent;
            alert(`تعديل الصنف: ${itemName}`);
            // Here you can open a modal or navigate to edit page
        });
    });
    
    // Delete button functionality
    const deleteButtons = document.querySelectorAll('.action-btn.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const itemName = row.querySelector('.item-name').textContent;
            
            if (confirm(`هل أنت متأكد من حذف الصنف: ${itemName}؟`)) {
                row.style.opacity = '0.5';
                row.style.pointerEvents = 'none';
                // Here you would typically make an API call to delete the item
                setTimeout(() => {
                    row.remove();
                }, 300);
            }
        });
    });
    
    // Pagination Configuration
    const ITEMS_PER_PAGE = 12;
    let currentPage = 1;

    // Function to update pagination display
    function updatePagination() {
        const itemRows = Array.from(document.querySelectorAll('.item-row')).filter(row => row.style.display !== 'none');
        const totalPages = Math.ceil(itemRows.length / ITEMS_PER_PAGE);
        
        // Update pagination buttons
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = '';
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.className = 'pagination-btn';
        prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showCurrentPage();
                updatePagination();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = 'pagination-btn' + (i === currentPage ? ' active' : '');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showCurrentPage();
                updatePagination();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.className = 'pagination-btn';
        nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showCurrentPage();
                updatePagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Function to show current page items
    function showCurrentPage() {
        const itemRows = Array.from(document.querySelectorAll('.item-row')).filter(row => row.style.display !== 'none');
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        
        itemRows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    // Add new item functionality
    window.openAddItemModal = function() {
        document.getElementById('addItemModal').style.display = 'flex';
    };
    window.closeAddItemModal = function() {
        document.getElementById('addItemModal').style.display = 'none';
    };

    // Image preview logic
    const itemImageInput = document.getElementById('itemImage');
    const imagePreview = document.getElementById('imagePreview');
    let imageDataUrl = '';
    if (itemImageInput && imagePreview) {
        itemImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    imageDataUrl = evt.target.result;
                    imagePreview.innerHTML = `<img src="${imageDataUrl}" alt="صورة الصنف" style="max-width: 120px; max-height: 120px; border-radius: 10px; box-shadow: 0 2px 8px #eee;">`;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                imagePreview.innerHTML = '';
                imagePreview.style.display = 'none';
                imageDataUrl = '';
            }
        });
    }

    // Add item to table from modal form
    const addItemForm = document.getElementById('addItemForm');
    if (addItemForm) {
        addItemForm.onsubmit = function(e) {
            e.preventDefault();
            const name = document.getElementById('itemName').value;
            const type = document.getElementById('itemType').value;
            const price = document.getElementById('itemPrice').value;
            const quantity = document.getElementById('itemQuantity').value;

            const tbody = document.querySelector('.inventory-table tbody');
            const tr = document.createElement('tr');
            tr.className = 'item-row';
            tr.setAttribute('data-type', type);
            tr.innerHTML = `
              <td class="item-image">${imageDataUrl ? `<img src="${imageDataUrl}" alt="صورة الصنف" class="item-img">` : ''}</td>
              <td class="item-name">${name}</td>
              <td class="item-type"><span class="type-badge ${type}">${type === 'food' ? 'طعام' : 'مشروب'}</span></td>
              <td class="item-price">${price} جنيه</td>
              <td class="item-quantity"><span class="quantity-badge">${quantity}</span></td>
              <td class="item-status"><span class="status-badge available">متوفر</span></td>
              <td class="item-actions">
                <button class="action-btn edit" title="تعديل"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" title="حذف"><i class="fas fa-trash"></i></button>
              </td>
            `;
            tbody.appendChild(tr);

            // Optionally, re-apply status/quantity logic
            if (typeof updateQuantityStatus === 'function') updateQuantityStatus();

            // Optionally, re-apply row hover effects
            tr.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
            tr.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });

            // Add edit/delete event listeners for new row
            tr.querySelector('.action-btn.edit').addEventListener('click', function() {
                alert(`تعديل الصنف: ${name}`);
            });
            tr.querySelector('.action-btn.delete').addEventListener('click', function() {
                if (confirm(`هل أنت متأكد من حذف الصنف: ${name}؟`)) {
                    tr.style.opacity = '0.5';
                    tr.style.pointerEvents = 'none';
                    setTimeout(() => {
                        tr.remove();
                    }, 300);
                }
            });

            window.closeAddItemModal();
            addItemForm.reset();
            imagePreview.innerHTML = '';
            imagePreview.style.display = 'none';
            imageDataUrl = '';

            // After adding new item, update pagination
            showCurrentPage();
            updatePagination();
        };
    }
    
    // Export data functionality
    const exportButton = document.querySelector('.btn-secondary');
    exportButton.addEventListener('click', function() {
        // Get all item rows
        const rows = document.querySelectorAll('.inventory-table tbody tr');
        
        // Create array to hold the data
        const data = [
            // Header row
            ['اسم الصنف', 'النوع', 'السعر', 'الكمية المتوفرة', 'الحالة']
        ];
        
        // Add each row's data
        rows.forEach(row => {
            const rowData = [
                row.querySelector('.item-name').textContent,
                row.querySelector('.type-badge').textContent,
                row.querySelector('.item-price').textContent,
                row.querySelector('.quantity-badge').textContent,
                row.querySelector('.status-badge').textContent
            ];
            data.push(rowData);
        });
        
        // Create a new workbook
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        
        // Set column widths
        const colWidths = [
            {wch: 20}, // Name
            {wch: 15}, // Type
            {wch: 15}, // Price
            {wch: 15}, // Quantity
            {wch: 15}  // Status
        ];
        ws['!cols'] = colWidths;
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, 'الاصناف');
        
        // Generate Excel file and trigger download
        XLSX.writeFile(wb, 'cafeteria_items.xlsx');
    });
    
    // Quantity status indicators
    function updateQuantityStatus() {
        itemRows.forEach(row => {
            const quantityElement = row.querySelector('.quantity-badge');
            const statusElement = row.querySelector('.status-badge');
            const quantity = parseInt(quantityElement.textContent);
            
            // Update quantity badge class
            quantityElement.className = 'quantity-badge';
            if (quantity > 20) {
                quantityElement.classList.add('high');
            } else if (quantity > 5) {
                quantityElement.classList.add('medium');
            } else {
                quantityElement.classList.add('low');
            }
            
            // Update status badge
            statusElement.className = 'status-badge';
            if (quantity === 0) {
                statusElement.textContent = 'نفذ المخزون';
                statusElement.classList.add('out-of-stock');
            } else if (quantity <= 5) {
                statusElement.textContent = 'كمية قليلة';
                statusElement.classList.add('low-stock');
            } else {
                statusElement.textContent = 'متوفر';
                statusElement.classList.add('available');
            }
        });
    }
    
    // Initialize quantity status
    updateQuantityStatus();
    
    // Add hover effects for better UX
    itemRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Initialize pagination
    showCurrentPage();
    updatePagination();
});
     // Cafetria submenu functionality
     const cafetriaMenu = document.getElementById('cafetria-menu');
       const cafetriaSubmenu = document.getElementById('cafetria-submenu');
       
       if (cafetriaMenu && cafetriaSubmenu) {
           cafetriaMenu.addEventListener('click', function(e) {
               e.preventDefault();
               this.classList.toggle('active');
               cafetriaSubmenu.classList.toggle('active');
           });
       }