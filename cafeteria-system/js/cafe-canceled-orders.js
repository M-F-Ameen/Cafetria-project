 // Data arrays
 let orders = [
    {
        id: 1,
        customer: {
            name: "أحمد محمد",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "بيتزا مارجريتا",
            description: "حجم كبير",
            image: "../images/pizza.jpg"
        },
        quantity: 2,
        price: "45 جنيه",
        collection: "دعم",
        time: "14:30",
        timeAgo: "منذ 15 دقيقة",
        status: "preparing",
        comments: "بدون جبنة إضافية"
    },
    {
        id: 2,
        customer: {
            name: "فاطمة علي",
            avatar: "../assets/imgs/customer02.jpg"
        },
        item: {
            name: "برجر دجاج",
            description: "مع بطاطس",
            image: "../images/burger.jpg"
        },
        quantity: 1,
        price: "25 جنيه",
        collection: "كاش",
        time: "14:15",
        timeAgo: "منذ 30 دقيقة",
        status: "ready",
        comments: "بدون بصل"
    },
    {
        id: 3,
        customer: {
            name: "محمد حسن",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "باستا كاربونارا",
            description: "حجم متوسط",
            image: "../images/pasta.jpg"
        },
        quantity: 1,
        price: "35 جنيه",
        collection: "دعم",
        time: "13:45",
        timeAgo: "منذ ساعة",
        status: "delivered",
        comments: "-"
    },
    {
        id: 4,
        customer: {
            name: "سارة أحمد",
            avatar: "../assets/imgs/customer02.jpg"
        },
        item: {
            name: "سلطة قيصر",
            description: "مع دجاج مشوي",
            image: "../images/caesar-salad.jpg"
        },
        quantity: 1,
        price: "30 جنيه",
        collection: "كاش",
        time: "14:45",
        timeAgo: "منذ 5 دقائق",
        status: "pending",
        comments: "بدون جبنة بارميزان"
    },
    {
        id: 5,
        customer: {
            name: "علي محمود",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "ساندويتش لحم بقري",
            description: "مع مشروب",
            image: "../images/beef-sandwich.jpg"
        },
        quantity: 2,
        price: "40 جنيه",
        collection: "دعم",
        time: "12:30",
        timeAgo: "منذ ساعتين",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    // Additional orders for more than 20 completed orders
    {
        id: 6,
        customer: { name: "منى سعيد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "تشيز كيك", description: "مع توت", image: "../images/cheesecake.jpg" },
        quantity: 1,
        price: "20 جنيه",
        collection: "كاش",
        time: "15:00",
        timeAgo: "منذ 2 دقيقة",
        status: "ready",
        comments: "-"
    },
    {
        id: 7,
        customer: { name: "خالد يوسف", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "شاي", description: "مع نعناع", image: "../images/tea.jpg" },
        quantity: 3,
        price: "15 جنيه",
        collection: "دعم",
        time: "15:05",
        timeAgo: "الآن",
        status: "delivered",
        comments: "سكر قليل"
    },
    {
        id: 8,
        customer: { name: "هالة إبراهيم", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "عصير برتقال", description: "طازج", image: "../images/orange-juice.jpg" },
        quantity: 2,
        price: "18 جنيه",
        collection: "كاش",
        time: "14:50",
        timeAgo: "منذ 10 دقائق",
        status: "ready",
        comments: "بدون ثلج"
    },
    {
        id: 9,
        customer: { name: "سامي عبد الله", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "دونات", description: "محشوة شوكولاتة", image: "../images/donut.jpg" },
        quantity: 4,
        price: "32 جنيه",
        collection: "دعم",
        time: "13:30",
        timeAgo: "منذ ساعة ونصف",
        status: "delivered",
        comments: "-"
    },
    {
        id: 10,
        customer: { name: "ياسمين فؤاد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شيبس", description: "حار", image: "../images/chips.jpg" },
        quantity: 2,
        price: "10 جنيه",
        collection: "كاش",
        time: "14:10",
        timeAgo: "منذ 35 دقيقة",
        status: "ready",
        comments: "-"
    },
    {
        id: 11,
        customer: { name: "محمود عادل", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "عصير تفاح", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "12 جنيه",
        collection: "دعم",
        time: "13:55",
        timeAgo: "منذ ساعة",
        status: "delivered",
        comments: "-"
    },
    {
        id: 12,
        customer: { name: "سحر محمد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "برجر لحم", description: "مع جبنة", image: "../images/burger.jpg" },
        quantity: 2,
        price: "50 جنيه",
        collection: "كاش",
        time: "14:20",
        timeAgo: "منذ 25 دقيقة",
        status: "ready",
        comments: "جبنة إضافية"
    },
    {
        id: 13,
        customer: { name: "طارق حسن", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "بيتزا خضار", description: "حجم وسط", image: "../images/pizza.jpg" },
        quantity: 1,
        price: "30 جنيه",
        collection: "دعم",
        time: "13:20",
        timeAgo: "منذ ساعتين",
        status: "delivered",
        comments: "بدون زيتون"
    },
    {
        id: 14,
        customer: { name: "أميرة سامي", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شاي مثلج", description: "مع ليمون", image: "../images/iced-tea.jpg" },
        quantity: 1,
        price: "8 جنيه",
        collection: "كاش",
        time: "14:55",
        timeAgo: "منذ 5 دقائق",
        status: "ready",
        comments: "-"
    },
    {
        id: 15,
        customer: { name: "حسن عبد الرحمن", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "ساندويتش دجاج", description: "مع صوص خاص", image: "../images/chicken-sandwich.jpg" },
        quantity: 1,
        price: "22 جنيه",
        collection: "دعم",
        time: "13:10",
        timeAgo: "منذ ساعتين",
        status: "delivered",
        comments: "-"
    },
    {
        id: 16,
        customer: { name: "سلوى أحمد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "كعكة شوكولاتة", description: "مع كريمة", image: "../images/chocolate-cake.jpg" },
        quantity: 1,
        price: "18 جنيه",
        collection: "كاش",
        time: "14:40",
        timeAgo: "منذ 10 دقائق",
        status: "ready",
        comments: "-"
    },
    {
        id: 17,
        customer: { name: "رامي يوسف", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "عصير مانجو", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 2,
        price: "20 جنيه",
        collection: "دعم",
        time: "13:50",
        timeAgo: "منذ ساعة",
        status: "delivered",
        comments: "-"
    },
    {
        id: 18,
        customer: { name: "هدى فؤاد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "سلطة فواكه", description: "طازجة", image: "../images/caesar-salad.jpg" },
        quantity: 1,
        price: "15 جنيه",
        collection: "كاش",
        time: "14:25",
        timeAgo: "منذ 20 دقيقة",
        status: "ready",
        comments: "-"
    },
    {
        id: 19,
        customer: { name: "مروان علي", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "بيتزا بيبروني", description: "حجم كبير", image: "../images/pizza.jpg" },
        quantity: 1,
        price: "40 جنيه",
        collection: "دعم",
        time: "13:30",
        timeAgo: "منذ ساعة ونصف",
        status: "delivered",
        comments: "-"
    },
    {
        id: 20,
        customer: { name: "داليا سامي", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "عصير ليمون", description: "بارد", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "10 جنيه",
        collection: "كاش",
        time: "14:35",
        timeAgo: "منذ 15 دقيقة",
        status: "ready",
        comments: "-"
    },
    {
        id: 21,
        customer: { name: "سعيد محمود", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "شيبس", description: "عادي", image: "../images/chips.jpg" },
        quantity: 3,
        price: "15 جنيه",
        collection: "دعم",
        time: "13:40",
        timeAgo: "منذ ساعة",
        status: "delivered",
        comments: "-"
    },
    {
        id: 22,
        customer: { name: "إيمان عبد الله", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شاي أخضر", description: "بدون سكر", image: "../images/tea.jpg" },
        quantity: 2,
        price: "12 جنيه",
        collection: "كاش",
        time: "14:05",
        timeAgo: "منذ 40 دقيقة",
        status: "ready",
        comments: "-"
    },
    // 20 new canceled orders below
    {
        id: 23,
        customer: { name: "سامي كمال", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "عصير جوافة", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "14 جنيه",
        collection: "كاش",
        time: "15:10",
        timeAgo: "الآن",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 24,
        customer: { name: "منى عبد العزيز", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "بيتزا جبن", description: "حجم صغير", image: "../images/pizza.jpg" },
        quantity: 2,
        price: "28 جنيه",
        collection: "دعم",
        time: "14:50",
        timeAgo: "منذ 10 دقائق",
        status: "cancelled",
        comments: "انتهى الوقت"
    },
    {
        id: 25,
        customer: { name: "خالد مصطفى", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "برجر لحم", description: "مع بطاطس", image: "../images/burger.jpg" },
        quantity: 1,
        price: "30 جنيه",
        collection: "كاش",
        time: "14:40",
        timeAgo: "منذ 20 دقيقة",
        status: "cancelled",
        comments: "تأخير في التحضير"
    },
    {
        id: 26,
        customer: { name: "سارة يوسف", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شاي", description: "مع نعناع", image: "../images/tea.jpg" },
        quantity: 2,
        price: "10 جنيه",
        collection: "دعم",
        time: "14:30",
        timeAgo: "منذ 30 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من الكاشير"
    },
    {
        id: 27,
        customer: { name: "محمود فؤاد", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "دونات", description: "محشوة مربى", image: "../images/donut.jpg" },
        quantity: 3,
        price: "24 جنيه",
        collection: "كاش",
        time: "14:20",
        timeAgo: "منذ 40 دقيقة",
        status: "cancelled",
        comments: "نفاد المنتج"
    },
    {
        id: 28,
        customer: { name: "هالة سامي", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "عصير تفاح", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "12 جنيه",
        collection: "دعم",
        time: "14:10",
        timeAgo: "منذ 50 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 29,
        customer: { name: "رامي عبد الله", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "شيبس", description: "عادي", image: "../images/chips.jpg" },
        quantity: 2,
        price: "10 جنيه",
        collection: "كاش",
        time: "14:00",
        timeAgo: "منذ ساعة",
        status: "cancelled",
        comments: "تغيير الطلب"
    },
    {
        id: 30,
        customer: { name: "سلوى حسن", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "كعكة شوكولاتة", description: "مع كريمة", image: "../images/chocolate-cake.jpg" },
        quantity: 1,
        price: "18 جنيه",
        collection: "دعم",
        time: "13:50",
        timeAgo: "منذ ساعة و10 دقائق",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 31,
        customer: { name: "طارق عبد الرحمن", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "بيتزا خضار", description: "حجم وسط", image: "../images/pizza.jpg" },
        quantity: 1,
        price: "30 جنيه",
        collection: "كاش",
        time: "13:40",
        timeAgo: "منذ ساعة و20 دقيقة",
        status: "cancelled",
        comments: "تأخير في التحضير"
    },
    {
        id: 32,
        customer: { name: "أميرة فؤاد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شاي مثلج", description: "مع ليمون", image: "../images/iced-tea.jpg" },
        quantity: 1,
        price: "8 جنيه",
        collection: "دعم",
        time: "13:30",
        timeAgo: "منذ ساعة ونصف",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 33,
        customer: { name: "حسن علي", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "ساندويتش دجاج", description: "مع صوص خاص", image: "../images/chicken-sandwich.jpg" },
        quantity: 2,
        price: "44 جنيه",
        collection: "كاش",
        time: "13:20",
        timeAgo: "منذ ساعة و40 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 34,
        customer: { name: "سلوى أحمد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "كعكة فانيليا", description: "مع كريمة", image: "../images/chocolate-cake.jpg" },
        quantity: 1,
        price: "18 جنيه",
        collection: "دعم",
        time: "13:10",
        timeAgo: "منذ ساعتين",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 35,
        customer: { name: "رامي يوسف", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "عصير مانجو", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 2,
        price: "20 جنيه",
        collection: "كاش",
        time: "13:00",
        timeAgo: "منذ ساعتين و10 دقائق",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 36,
        customer: { name: "هدى فؤاد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "سلطة فواكه", description: "طازجة", image: "../images/caesar-salad.jpg" },
        quantity: 1,
        price: "15 جنيه",
        collection: "دعم",
        time: "12:50",
        timeAgo: "منذ ساعتين و20 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 37,
        customer: { name: "مروان علي", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "بيتزا بيبروني", description: "حجم كبير", image: "../images/pizza.jpg" },
        quantity: 1,
        price: "40 جنيه",
        collection: "كاش",
        time: "12:40",
        timeAgo: "منذ ساعتين ونصف",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 38,
        customer: { name: "داليا سامي", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "عصير ليمون", description: "بارد", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "10 جنيه",
        collection: "دعم",
        time: "12:30",
        timeAgo: "منذ ساعتين و40 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 39,
        customer: { name: "سعيد محمود", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "شيبس", description: "عادي", image: "../images/chips.jpg" },
        quantity: 3,
        price: "15 جنيه",
        collection: "كاش",
        time: "12:20",
        timeAgo: "منذ ثلاث ساعات",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 40,
        customer: { name: "إيمان عبد الله", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "شاي أخضر", description: "بدون سكر", image: "../images/tea.jpg" },
        quantity: 2,
        price: "12 جنيه",
        collection: "دعم",
        time: "12:10",
        timeAgo: "منذ ثلاث ساعات و10 دقائق",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 41,
        customer: { name: "أحمد عبد الله", avatar: "../assets/imgs/customer01.jpg" },
        item: { name: "عصير فراولة", description: "طبيعي", image: "../images/orange-juice.jpg" },
        quantity: 1,
        price: "16 جنيه",
        collection: "كاش",
        time: "12:00",
        timeAgo: "منذ ثلاث ساعات و20 دقيقة",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    },
    {
        id: 42,
        customer: { name: "منى سعيد", avatar: "../assets/imgs/customer02.jpg" },
        item: { name: "تشيز كيك", description: "مع توت", image: "../images/cheesecake.jpg" },
        quantity: 1,
        price: "20 جنيه",
        collection: "دعم",
        time: "11:50",
        timeAgo: "منذ ثلاث ساعات ونصف",
        status: "cancelled",
        comments: "تم الإلغاء من العميل"
    }
];
let hospitalityOrders = [
    {
        id: 101,
        customer: {
            name: "إدارة الجامعة",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "شاي وقهوة",
            description: "ضيافة اجتماع مجلس الجامعة",
            image: "../images/tea.jpg"
        },
        quantity: 10,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "11:00",
        timeAgo: "منذ ساعتين",
        status: "ready",
        comments: "بدون سكر"
    },
    {
        id: 102,
        customer: {
            name: "قسم شؤون الطلاب",
            avatar: "../assets/imgs/customer02.jpg"
        },
        item: {
            name: "عصائر وحلويات",
            description: "ضيافة حفل تكريم",
            image: "../images/orange-juice.jpg"
        },
        quantity: 20,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "13:00",
        timeAgo: "منذ نصف ساعة",
        status: "preparing",
        comments: "تقديم بارد"
    },
    {
        id: 103,
        customer: {
            name: "قسم الموارد البشرية",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "قهوة عربية",
            description: "ضيافة مقابلات التوظيف",
            image: "../images/tea.jpg"
        },
        quantity: 8,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "09:30",
        timeAgo: "منذ 3 ساعات",
        status: "pending",
        comments: "سكر قليل"
    },
    {
        id: 104,
        customer: {
            name: "إدارة العلاقات العامة",
            avatar: "../assets/imgs/customer02.jpg"
        },
        item: {
            name: "مياه معدنية",
            description: "ضيافة مؤتمر صحفي",
            image: "../images/cola.jpg"
        },
        quantity: 15,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "10:45",
        timeAgo: "منذ ساعة ونصف",
        status: "delivered",
        comments: "باردة"
    },
    {
        id: 105,
        customer: {
            name: "قسم المالية",
            avatar: "../assets/imgs/customer01.jpg"
        },
        item: {
            name: "كيك شوكولاتة",
            description: "ضيافة اجتماع الميزانية",
            image: "../images/chocolate-cake.jpg"
        },
        quantity: 12,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "12:15",
        timeAgo: "منذ ساعة",
        status: "cancelled",
        comments: "تم الإلغاء"
    },
    {
        id: 106,
        customer: {
            name: "قسم تقنية المعلومات",
            avatar: "../assets/imgs/customer02.jpg"
        },
        item: {
            name: "دونات",
            description: "ضيافة ورشة عمل",
            image: "../images/donut.jpg"
        },
        quantity: 18,
        price: "0 جنيه",
        collection: "ضيافة",
        time: "14:00",
        timeAgo: "منذ 10 دقائق",
        status: "preparing",
        comments: "تقديم مع عصير"
    }
];
function getStatusText(status) {
    const statusMap = {
        'pending': 'في الانتظار',
        'preparing': 'قيد التحضير',
        'ready': 'جاهز',
        'delivered': 'تم التوصيل',
        'cancelled': 'ملغي'
    };
    return statusMap[status] || status;
}
function renderCancelledOrders() {
    const tbody = document.getElementById('cancelledOrdersTableBody');
    tbody.innerHTML = '';
    // Combine both arrays and filter for cancelled orders
    const cancelled = [...orders, ...hospitalityOrders].filter(order => order.status === 'cancelled');
    if (cancelled.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8">
                    <div class="no-orders">
                        <i class="fas fa-clipboard-list"></i>
                        <h3>لا توجد طلبات ملغيه</h3>
                        <p>لم يتم العثور على طلبات ملغيه</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    cancelled.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="customer-info">
                    <img src="${order.customer.avatar}" alt="Customer" class="customer-avatar">
                    <div class="customer-details">
                        <h4>${order.customer.name}</h4>
                    </div>
                </div>
            </td>
            <td>
                <div class="order-item">
                    <img src="${order.item.image}" alt="${order.item.name}" class="order-image">
                    <div class="order-details">
                        <h4>${order.item.name}</h4>
                        <p>${order.item.description}</p>
                    </div>
                </div>
            </td>
            <td>${order.quantity}</td>
            <td>${order.price}</td>
            <td><span class="collection-badge ${order.collection === 'دعم' ? 'collection-support' : order.collection === 'كاش' ? 'collection-cash' : 'collection-support'}">${order.collection}</span></td>
            <td>
                <div class="order-time">
                    <div>${order.time}</div>
                    <div>${order.timeAgo}</div>
                </div>
            </td>
            <td>
                <div class="order-comments">${order.comments}</div>
            </td>
            <td>
                <span class="status-badge status-${order.status}">${getStatusText(order.status)}</span>
            </td>
        `;
        tbody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', renderCancelledOrders);