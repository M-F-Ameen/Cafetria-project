function addStatusOdoo() {
    const status = document.getElementById('newStatusOdoo').value;
    if(status) alert('تمت إضافة الحالة: ' + status);
}
function addPhoneOdoo() {
    const phone = document.getElementById('phoneOdoo').value;
    if(phone) alert('تمت إضافة رقم الهاتف: ' + phone);
}
function backupOdoo() {
    alert('تم بدء النسخ الاحتياطي!');
}
function resetOdoo() {
    if(confirm('هل أنت متأكد من إعادة الضبط؟ سيتم فقدان جميع الإعدادات.')) {
        alert('تمت إعادة الضبط!');
    }
}
     // Cafetria submenu functionality
//      const cafetriaMenu = document.getElementById('cafetria-menu');
//    const cafetriaSubmenu = document.getElementById('cafetria-submenu');
   
//    if (cafetriaMenu && cafetriaSubmenu) {
//        cafetriaMenu.addEventListener('click', function(e) {
//            e.preventDefault();
//            this.classList.toggle('active');
//            cafetriaSubmenu.classList.toggle('active');
//        });
//    }

// Preview the selected logo image
const logoInput = document.getElementById('logoInputOdoo');
const logoPreview = document.getElementById('logoPreviewOdoo');
const changeLogoBtn = document.getElementById('changeLogoBtnOdoo');
const headerLogo = document.querySelector('.logo img'); // Get the header logo element

if (logoInput && logoPreview && headerLogo) {
    logoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Update both the preview and header logo
                logoPreview.src = e.target.result;
                headerLogo.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

if (changeLogoBtn) {
    changeLogoBtn.addEventListener('click', function() {
        if (logoInput.files.length > 0) {
            // Here you would send the file to the server if backend is available
            alert('تم تغيير الشعار بنجاح!');
            
            // If you want to make the change more "permanent" for the session,
            // you could store the image data in localStorage
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('savedLogo', e.target.result);
            };
            reader.readAsDataURL(logoInput.files[0]);
        } else {
            alert('يرجى اختيار صورة شعار جديدة أولاً.');
        }
    });
}

// Check for saved logo on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLogo = localStorage.getItem('savedLogo');
    if (savedLogo && headerLogo && logoPreview) {
        headerLogo.src = savedLogo;
        logoPreview.src = savedLogo;
    }
});