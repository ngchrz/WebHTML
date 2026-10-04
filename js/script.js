/* =====================================================
   TEA & CAFE — JAVASCRIPT CHÍNH (NÂNG CẤP TOÀN DIỆN)
   Sản phẩm · Chi tiết · Quick View · Giỏ hàng · Voucher
   VietQR động · Lịch sử đơn hàng · Admin Tabs & Hóa đơn
   Đăng ký / Đăng nhập · Demo Accounts
===================================================== */
(function () {
    "use strict";

    /* Bật cờ .js trên <html> để các hiệu ứng reveal chỉ chạy khi có JS */
    document.documentElement.classList.add("js");

    /* ---------- Dữ liệu sản phẩm (Nguồn dữ liệu duy nhất) ---------- */
    const products = {
        "cafe-den": {
            id: "cafe-den",
            name: "Cafe đen",
            price: 30000,
            category: "CAFE",
            badge: "BEST",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
            short: "Cà phê nguyên chất rang xay, đậm đà thơm ngon chuẩn vị.",
            ingredients: "Cà phê Robusta nguyên chất, đường mía và đá tinh khiết.",
            flavor: "Đậm đà, thơm mùi cà phê mộc, hơi đắng nhẹ và có hậu vị ngọt thanh.",
            suitable: "Phù hợp với người thích hương vị cà phê truyền thống đậm đà buổi sáng.",
            description: "Cafe đen được pha từ những hạt cà phê rang mộc tuyển chọn, mang đến hương thơm đặc trưng đánh thức mọi giác quan."
        },

        "cafe-sua": {
            id: "cafe-sua",
            name: "Cafe sữa",
            price: 35000,
            category: "CAFE",
            badge: "HOT",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
            short: "Cà phê đậm đà hòa quyện cùng sữa ngọt béo quyến rũ.",
            ingredients: "Cà phê nguyên chất, sữa đặc thượng hạng và đá viên.",
            flavor: "Đậm vị cà phê kết hợp với vị béo ngậy ngọt dịu của sữa.",
            suitable: "Phù hợp với người thích cà phê nhưng muốn vị êm ái, béo ngọt hơn.",
            description: "Sự kết hợp hoàn hảo giữa cà phê đậm đà và sữa ngọt ngào, tạo nên thức uống quen thuộc không thể thiếu mỗi ngày."
        },

        "cafe-da-xay": {
            id: "cafe-da-xay",
            name: "Cafe đá xay",
            price: 45000,
            category: "CAFE",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
            short: "Cà phê xay cùng đá và sữa, mát lạnh sánh mịn sảng khoái.",
            ingredients: "Cà phê phin, sữa tươi, đá xay mịn và lớp kem whipping béo ngậy.",
            flavor: "Mát lạnh tê lưỡi, sánh mịn béo thơm, vị ngọt thanh hài hòa.",
            suitable: "Lý tưởng cho những buổi chiều oi bức hoặc người mê đồ uống đá xay.",
            description: "Cafe được xay nhuyễn cùng đá tuyết và sữa tươi, phủ bên trên lớp kem bông mềm xốp thơm lừng."
        },

        "tra-dao-cam-sa": {
            id: "tra-dao-cam-sa",
            name: "Trà đào cam sả",
            price: 45000,
            category: "TRÀ",
            badge: "HOT",
            image: "https://i.pinimg.com/736x/1b/95/1b/1b951b6c5c9403ce94f19cf591f296da.jpg",
            short: "Hương đào ngọt dịu, cam vàng mọng nước và sả thơm ngát.",
            ingredients: "Cốt trà lài, miếng đào giòn, nước cam tươi, củ sả tươi đập dập và syrup đào.",
            flavor: "Thanh mát giải nhiệt, chua ngọt tự nhiên, thơm nức mùi sả và cam vàng.",
            suitable: "Thức uống quốc dân phù hợp với mọi lứa tuổi, đặc biệt trong những ngày nắng hè.",
            description: "Trà đào cam sả là sự kết hợp tươi mát giữa vị đắng nhẹ của trà, vị ngọt giòn của đào ngâm và hương thơm tinh dầu cam sả."
        },

        "tra-xanh": {
            id: "tra-xanh",
            name: "Trà xanh",
            price: 30000,
            category: "TRÀ",
            badge: "",
            image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
            short: "Vị trà thanh nhẹ, mát lành tinh khiết dễ uống mỗi ngày.",
            ingredients: "Búp trà xanh Thái Nguyên tươi chọn lọc, đường phèn và đá.",
            flavor: "Thanh tao, chát nhẹ ban đầu và đọng lại vị ngọt hậu sâu lắng.",
            suitable: "Thích hợp cho người chuộng thức uống tự nhiên, thanh lọc cơ thể.",
            description: "Trà xanh được ủ từ những búp trà tươi non, giữ trọn vẹn chất chống oxy hóa và hương thơm cỏ cây mộc mạc."
        },

        "tra-chanh": {
            id: "tra-chanh",
            name: "Trà chanh",
            price: 30000,
            category: "TRÀ",
            badge: "BEST",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
            short: "Chua ngọt hài hòa, thơm lừng vỏ chanh, sảng khoái tức thì.",
            ingredients: "Trà nhài thơm, cốt chanh tươi vắt tay, mật ong và đá lạnh.",
            flavor: "Chua thanh dịu ngọt, thơm nức hương chanh tươi mát rượi.",
            suitable: "Giải khát tức thì, phù hợp với mọi buổi trò chuyện cùng bạn bè bè.",
            description: "Trà chanh tươi mát kết hợp giữa hương trà lài thanh nhã và vị chua ngọt sảng khoái của chanh tươi mọng nước."
        },

        "tra-sua-truyen-thong": {
            id: "tra-sua-truyen-thong",
            name: "Trà sữa truyền thống",
            price: 40000,
            category: "TRÀ SỮA",
            badge: "HOT",
            image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=700&q=80",
            short: "Vị trà đậm đà, sữa béo ngậy và trân châu đường đen dai mềm.",
            ingredients: "Trà đen Ceylon, sữa bột béo cao cấp, trân châu dẻo thơm.",
            flavor: "Béo ngọt đậm đà, dậy mùi thơm của trà đen nguyên bản.",
            suitable: "Món tủ của tín đồ trà sữa yêu thích vị trà đậm và trân châu dai giòn.",
            description: "Trà sữa truyền thống nấu theo công thức đặc biệt, cân bằng hài hòa giữa độ đậm của cốt trà đen và độ béo ngậy của sữa."
        },

        "tra-sua-matcha": {
            id: "tra-sua-matcha",
            name: "Trà sữa matcha",
            price: 45000,
            category: "TRÀ SỮA",
            badge: "NEW",
            image: "https://i.pinimg.com/736x/80/9e/90/809e90b5c6c43c52d990d16781c42fe1.jpg",
            short: "Matcha Nhật Bản thơm đặc trưng hòa cùng sữa béo dịu.",
            ingredients: "Bột matcha Uji thượng hạng, sữa tươi thanh trùng, trân châu trắng.",
            flavor: "Thơm lừng hương trà xanh Nhật, ngậy béo sữa và hơi chát nhẹ đặc trưng.",
            suitable: "Dành cho fan cuồng của matcha và thức uống màu xanh tươi mát.",
            description: "Bột matcha nhập khẩu trực tiếp từ Nhật Bản, đánh bông cùng sữa tươi tạo nên màu xanh ngọc bích hấp dẫn cùng hương vị khó quên."
        },

        "tra-sua-socola": {
            id: "tra-sua-socola",
            name: "Trà sữa socola",
            price: 45000,
            category: "TRÀ SỮA",
            badge: "",
            image: "https://i.pinimg.com/1200x/3b/67/cf/3b67cfdb7f990b06f546fd255ac3dbea.jpg",
            short: "Socola nguyên chất đậm vị kết hợp trà sữa béo mịn.",
            ingredients: "Cacao nguyên chất, trà đen, sữa béo, sốt socola và trân châu.",
            flavor: "Ngọt ngào, thơm nức mùi socola, béo ngậy nhưng không ngấy.",
            suitable: "Thích hợp cho người hảo ngọt và mê hương vị socola quyến rũ.",
            description: "Sự hòa quyện tuyệt hảo giữa vị đắng nhẹ của cacao nguyên chất và vị ngọt ngào béo thơm của dòng trà sữa trứ danh."
        },

        "bac-xiu": {
            id: "bac-xiu",
            name: "Bạc xỉu",
            price: 38000,
            category: "CAFE",
            badge: "NEW",
            image: "https://i.pinimg.com/736x/c5/8a/88/c58a88f9190b8b751a4576edca99f7ef.jpg",
            short: "Sữa tươi béo ngậy điểm xuyết cà phê đậm, ngọt êm dễ uống.",
            ingredients: "Sữa tươi thanh trùng, sữa đặc và một shot cà phê phin.",
            flavor: "Béo sữa, ngọt dịu, thoảng hương cà phê êm mượt.",
            suitable: "Hợp người mới uống cà phê hoặc thích vị sữa nhiều hơn.",
            description: "Bạc xỉu pha theo kiểu Sài Gòn với lớp sữa tươi béo mịn bên dưới và cà phê phin đậm bên trên, khuấy đều trước khi uống."
        },

        "latte-nong": {
            id: "latte-nong",
            name: "Latte nóng",
            price: 42000,
            category: "CAFE",
            badge: "",
            image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80",
            short: "Espresso đậm hòa sữa nóng mịn màng, lớp bọt sữa vẽ tay.",
            ingredients: "Espresso doppio, sữa tươi đánh nóng và lớp microfoam mịn.",
            flavor: "Êm dịu, béo sữa, hậu vị cà phê nhẹ nhàng thanh thoát.",
            suitable: "Dành cho buổi sáng se lạnh hoặc người thích cà phê Ý nhẹ nhàng.",
            description: "Ly latte nóng với sữa đánh mịn như nhung, giữ ấm lâu và thơm nức hương espresso rang vừa."
        },

        "tra-vai": {
            id: "tra-vai",
            name: "Trà vải",
            price: 42000,
            category: "TRÀ",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=700&q=80",
            short: "Trà lài thơm mát kết hợp vải thiều ngọt mọng, thanh tao.",
            ingredients: "Cốt trà lài, vải thiều ngâm, syrup vải và đá viên.",
            flavor: "Ngọt thanh, thơm nức mùi vải, mát lạnh sảng khoái.",
            suitable: "Hợp người thích trà trái cây ngọt dịu, thơm lâu.",
            description: "Trà vải dùng vải thiều mọng nước ngâm vừa tới, giữ trọn vị ngọt tự nhiên hòa cùng trà lài thơm ngát."
        },

        "tra-sua-duong-den": {
            id: "tra-sua-duong-den",
            name: "Trà sữa đường đen",
            price: 48000,
            category: "TRÀ SỮA",
            badge: "HOT",
            image: "https://i.pinimg.com/1200x/a6/29/37/a62937e91a60d28210dd03bc111fe939.jpg",
            short: "Trân châu đường đen dẻo thơm, sữa tươi béo ngậy chuẩn vị.",
            ingredients: "Trân châu đường đen nấu thủ công, sữa tươi và trà đen.",
            flavor: "Ngọt đậm mùi đường đen, béo sữa, trân châu dai mềm ấm nóng.",
            suitable: "Món bán chạy cho tín đồ trân châu đường đen chính hiệu.",
            description: "Trân châu được nấu cùng đường đen sánh kẹo, áo quanh thành ly tạo vân hổ phách đẹp mắt."
        },

        "espresso": {
            id: "espresso",
            name: "Espresso",
            price: 35000,
            category: "CAFE",
            badge: "HOT",
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80",
            short: "Shot espresso nguyên chất đậm đặc, crema vàng óng chuẩn Ý.",
            ingredients: "100% hạt Arabica Cầu Đất rang vừa, chiết xuất 25 giây.",
            flavor: "Đậm đặc, đắng thanh, chua nhẹ và hậu vị socola kéo dài.",
            suitable: "Dành cho người sành cà phê thích vị nguyên bản mạnh mẽ.",
            description: "Espresso chiết xuất từ hạt Arabica Cầu Đất bằng máy chuyên nghiệp, lớp crema dày vàng óng thơm nức."
        },

        "cappuccino": {
            id: "cappuccino",
            name: "Cappuccino",
            price: 45000,
            category: "CAFE",
            badge: "",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80",
            short: "Espresso êm cùng sữa nóng và bọt sữa dày vẽ hình nghệ thuật.",
            ingredients: "Espresso, sữa tươi đánh nóng, bọt microfoam và bột cacao.",
            flavor: "Cân bằng đắng-ngọt-béo, bọt sữa mịn như kem tan trong miệng.",
            suitable: "Hợp người thích cà phê Ý nhẹ nhàng, ngắm latte art đẹp mắt.",
            description: "Cappuccino chuẩn Ý với tỉ lệ 1/3 espresso, 1/3 sữa nóng, 1/3 bọt sữa, rắc cacao thơm lừng."
        },

        "cafe-trung": {
            id: "cafe-trung",
            name: "Cafe trứng",
            price: 45000,
            category: "CAFE",
            badge: "BEST",
            image: "https://i.pinimg.com/1200x/05/cf/e8/05cfe863ce9708bde82fa4217e1bbb76.jpg",
            short: "Cà phê phin đậm hòa kem trứng béo ngậy đặc sản Hà Nội.",
            ingredients: "Cà phê phin, lòng đỏ trứng gà ta, sữa đặc và bột cacao.",
            flavor: "Béo thơm mùi trứng sữa, đắng nhẹ cà phê, ngọt êm không tanh.",
            suitable: "Món phải thử cho ai mê hương vị Hà Nội xưa ấm nồng.",
            description: "Cafe trứng đánh bông mịn như kem, giữ nóng trong bát nước ấm, thơm béo quyến rũ khó quên."
        },

        "cold-brew-cam": {
            id: "cold-brew-cam",
            name: "Cold brew cam vàng",
            price: 48000,
            category: "CAFE",
            badge: "NEW",
            image: "https://i.pinimg.com/1200x/e4/fb/54/e4fb54f65e9e16ffa14f38bb78f98bbb.jpg",
            short: "Cà phê ủ lạnh 18 giờ kết hợp cam vàng tươi mát sảng khoái.",
            ingredients: "Cà phê ủ lạnh, cam vàng Mỹ, syrup đường nâu và đá viên.",
            flavor: "Mượt mà ít chua, thơm cam tươi, ngọt thanh mát lạnh.",
            suitable: "Dành cho người thích cà phê hiện đại, nhẹ nhàng mà tỉnh táo.",
            description: "Cà phê ủ lạnh chậm 18 giờ cho vị mượt ít đắng, lắc cùng cam vàng tươi tạo nên thức uống hai tầng đẹp mắt."
        },

        "tra-oolong": {
            id: "tra-oolong",
            name: "Trà oolong",
            price: 35000,
            category: "TRÀ",
            badge: "",
            image: "https://i.pinimg.com/736x/92/89/d7/9289d7a9ec59fa7f571f4d87b554d599.jpg",
            short: "Oolong cao nguyên thanh khiết, hương hoa lan thoảng nhẹ.",
            ingredients: "Búp trà oolong Lâm Đồng sao tay, đường phèn và đá.",
            flavor: "Chát êm đầu lưỡi, ngọt hậu sâu, thơm hoa lan tinh tế.",
            suitable: "Hợp người uống trà mỗi ngày, thanh lọc nhẹ nhàng.",
            description: "Trà oolong hái tay trên cao nguyên, sao nhẹ giữ hương hoa lan tự nhiên và vị ngọt hậu đặc trưng."
        },

        "tra-sen-vang": {
            id: "tra-sen-vang",
            name: "Trà sen vàng",
            price: 42000,
            category: "TRÀ",
            badge: "HOT",
            image: "https://i.pinimg.com/736x/73/2f/70/732f707c5aef1910b57e7eb8ee56fac9.jpg",
            short: "Trà oolong ướp sen thơm ngát cùng củ năng giòn ngọt.",
            ingredients: "Trà oolong ướp sen Hồ Tây, hạt sen tươi, củ năng và kem sữa.",
            flavor: "Thơm sen thanh cao, ngọt dịu, topping giòn vui miệng.",
            suitable: "Món signature cho người mê trà sen đậm chất Việt.",
            description: "Trà sen vàng ướp cánh sen tươi qua đêm, thêm hạt sen bùi và củ năng giòn tạo nên ly trà thanh tao."
        },

        "tra-sua-khoai-mon": {
            id: "tra-sua-khoai-mon",
            name: "Trà sữa khoai môn",
            price: 48000,
            category: "TRÀ SỮA",
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1525803377221-4f6ccdaa581d?auto=format&fit=crop&w=700&q=80",
            short: "Khoai môn tím bùi béo hòa sữa tươi, màu tím pastel đẹp mắt.",
            ingredients: "Khoai môn Lệ Phố hấp nghiền, sữa tươi, trà lài và trân châu.",
            flavor: "Bùi béo khoai môn, ngọt dịu, thơm sữa ngậy ngậy.",
            suitable: "Món hot cho tín đồ màu tím và vị béo bùi dẻo thơm.",
            description: "Khoai môn hấp nghiền nhuyễn xay cùng sữa tươi, cho ly trà sữa tím pastel béo bùi thơm lừng."
        },

        "tra-sua-thai-xanh": {
            id: "tra-sua-thai-xanh",
            name: "Trà sữa thái xanh",
            price: 45000,
            category: "TRÀ SỮA",
            badge: "",
            image: "https://i.pinimg.com/736x/5a/fb/1b/5afb1b79d0de2bcb2707d459b9108bc6.jpg",
            short: "Trà thái xanh thơm mùi nhài kem béo cùng thạch giòn.",
            ingredients: "Trà thái xanh nhập khẩu, sữa béo, kem sữa và thạch trà.",
            flavor: "Thơm trà thái đặc trưng, béo kem, ngọt mát dễ ghiền.",
            suitable: "Hợp người mê trà thái chuẩn vị chua nhẹ thơm lâu.",
            description: "Trà thái xanh ủ đậm đà pha cùng sữa béo và lớp kem sữa mặn ngọt, thêm thạch trà giòn dai."
        }
    };

    /* ---------- Khóa localStorage ---------- */
    const CART_KEY = "teaCafeCart",
        USER_KEY = "teaCafeUsers",
        LOGIN_KEY = "teaCafeCurrentUser",
        ORDERS_KEY = "teaCafeOrders",
        CONTACT_KEY = "teaCafeContacts",
        COUPON_KEY = "teaCafeAppliedCoupon";

    /* ---------- Tiện ích chung ---------- */
    const $ = (sel, el = document) => el.querySelector(sel);
    const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
    const money = n => new Intl.NumberFormat("vi-VN").format(Number(n) || 0) + "đ";

    function readJSON(key, fallback) {
        try {
            const v = JSON.parse(localStorage.getItem(key));
            return v === null || v === undefined ? fallback : v;
        } catch (e) {
            return fallback;
        }
    }

    function writeJSON(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* bộ nhớ không khả dụng */ }
    }

    /* ---------- Toast thông báo hiện đại ---------- */
    function toast(message, isError) {
        let box = $(".toast");
        if (!box) {
            box = document.createElement("div");
            box.className = "toast";
            box.setAttribute("role", "status");
            document.body.appendChild(box);
        }
        box.textContent = message;
        box.classList.toggle("error", !!isError);
        box.classList.add("show");
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => box.classList.remove("show"), 2800);
    }

    /* ---------- Khuyến mãi & Vouchers ---------- */
    const VOUCHERS = {
        "WELCOME10": { name: "Giảm 10% tổng đơn", type: "PERCENT", value: 10, min: 0 },
        "FREESHIP": { name: "Miễn phí vận chuyển (20.000đ)", type: "SHIP", value: 20000, min: 0 },
        "CAFE20K": { name: "Giảm 20.000đ cho đơn từ 60.000đ", type: "FIXED", value: 20000, min: 60000 }
    };

    function getAppliedCoupon() {
        return readJSON(COUPON_KEY, null);
    }

    function setAppliedCoupon(coupon) {
        if (coupon) writeJSON(COUPON_KEY, coupon);
        else localStorage.removeItem(COUPON_KEY);
    }

    /* ---------- Giỏ hàng ---------- */
    function getCart() { return readJSON(CART_KEY, []); }
    function saveCart(cart) { writeJSON(CART_KEY, cart); }

    function cartCount() {
        return getCart().reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
    }

    function updateCartBadge() {
        const count = cartCount();
        $$(".cart-badge").forEach(badge => {
            badge.textContent = count;
            badge.style.display = count ? "" : "none";
            badge.classList.remove("bump");
            void badge.offsetWidth; // trigger reflow
            if (count) badge.classList.add("bump");
        });
    }

    function addToCart(product, qty, options = {}) {
        if (!product) return;
        const cart = getCart();
        qty = Math.max(1, parseInt(qty, 10) || 1);

        const size = options.size || "M";
        const sugar = options.sugar || "100%";
        const ice = options.ice || "100%";

        // Phụ thu size L là 8.000đ
        const extraPrice = size === "L" ? 8000 : 0;
        const itemPrice = Number(product.price) + extraPrice;

        const cartItemId = `${product.id}_${size}_${sugar}_${ice}`;
        const found = cart.find(item => item.cartItemId === cartItemId || (!item.cartItemId && item.id === product.id && size === "M"));

        if (found) {
            found.qty = Math.min(99, found.qty + qty);
            found.cartItemId = cartItemId;
        } else {
            cart.push({
                cartItemId,
                id: product.id,
                name: product.name,
                price: itemPrice,
                basePrice: Number(product.price),
                image: product.image,
                category: product.category,
                size,
                sugar,
                ice,
                qty
            });
        }

        saveCart(cart);
        updateCartBadge();

        const optStr = size === "L" ? " (Size L)" : "";
        toast(`Đã thêm "${product.name}${optStr}" vào giỏ hàng!`);
    }

    /* Đồng bộ thẻ sản phẩm tĩnh với dữ liệu */
    function syncProductCards() {
        $$(".product-card[data-id]").forEach(card => {
            const p = products[card.dataset.id];
            if (!p) return;

            const media = $(".product-media", card);
            if (media) {
                // Thêm badge nếu có và chưa render
                if (p.badge && !$(".product-badges", media)) {
                    const badgeWrap = document.createElement("div");
                    badgeWrap.className = "product-badges";
                    const bClass = p.badge === "HOT" ? "badge-hot" : (p.badge === "NEW" ? "badge-new" : "badge-best");
                    badgeWrap.innerHTML = `<span class="badge-item ${bClass}">${p.badge}</span>`;
                    media.appendChild(badgeWrap);
                }
            }

            const img = $("img", card);
            if (img) { img.src = p.image; img.alt = p.name; }
            const name = $(".product-name a", card) || $(".product-name", card);
            if (name) name.textContent = p.name;
            const desc = $(".product-desc", card);
            if (desc) desc.textContent = p.short;
            const price = $(".product-price", card);
            if (price) price.textContent = money(p.price);
            const tag = $(".product-tag", card);
            if (tag) tag.textContent = p.category;

            // Nút xem nhanh nằm trên ảnh nếu chưa có
            const actions = $(".product-media", card);
            if (actions && !$(".btn-quickview", actions)) {
                const qvBtn = document.createElement("button");
                qvBtn.type = "button";
                qvBtn.className = "btn-quickview";
                qvBtn.dataset.quickview = p.id;
                qvBtn.innerHTML = "👁️";
                qvBtn.title = "Xem nhanh sản phẩm";
                qvBtn.setAttribute("aria-label", "Xem nhanh " + p.name);
                actions.appendChild(qvBtn);
            }
        });
    }

    /* Nút "Thêm vào giỏ" bất kỳ đâu có thuộc tính data-add="<id>" */
    document.addEventListener("click", e => {
        const btn = e.target.closest("[data-add]");
        if (btn) {
            e.preventDefault();
            const product = products[btn.dataset.add];
            if (!product) return;
            addToCart(product, 1, { size: "M", sugar: "100%", ice: "100%" });
            return;
        }

        const qvBtn = e.target.closest("[data-quickview]");
        if (qvBtn) {
            e.preventDefault();
            openQuickView(qvBtn.dataset.quickview);
            return;
        }
    });

    /* ---------- Quick View Modal ---------- */
    function openQuickView(productId) {
        const p = products[productId];
        if (!p) return;

        let modalWrap = $("#quickViewModal");
        if (modalWrap) modalWrap.remove();

        modalWrap = document.createElement("div");
        modalWrap.id = "quickViewModal";
        modalWrap.className = "modal-overlay";
        modalWrap.innerHTML = `
            <div class="modal" style="max-width: 680px; text-align: left; padding: 28px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1px solid var(--line); padding-bottom: 12px;">
                    <span class="product-tag-inline" style="margin: 0;">${p.category}</span>
                    <button type="button" id="closeQv" style="border:0; background:none; font-size:24px; cursor:pointer; color:var(--muted); line-height:1;">&times;</button>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; align-items: start;">
                    <div style="border-radius: 14px; overflow: hidden; box-shadow: var(--shadow-sm);">
                        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 260px; object-fit: cover;">
                    </div>
                    <div>
                        <h2 style="font-family: var(--font-display); font-size: 24px; color: var(--coffee-dark); margin-bottom: 6px;">${p.name}</h2>
                        <div style="font-size: 22px; font-weight: 800; color: var(--coffee); margin-bottom: 12px;" id="qvPrice">${money(p.price)}</div>
                        <p style="font-size: 13.5px; color: var(--muted); line-height: 1.6; margin-bottom: 16px;">${p.description}</p>
                        
                        <div class="options-grid">
                            <div>
                                <div class="option-title">Kích thước:</div>
                                <div class="chip-group">
                                    <label class="option-chip"><input type="radio" name="qvSize" value="M" checked><span>M (Chuẩn)</span></label>
                                    <label class="option-chip"><input type="radio" name="qvSize" value="L"><span>L (+8.000đ)</span></label>
                                </div>
                            </div>
                            <div>
                                <div class="option-title">Mức đường:</div>
                                <div class="chip-group">
                                    <label class="option-chip"><input type="radio" name="qvSugar" value="100%" checked><span>100% Bình thường</span></label>
                                    <label class="option-chip"><input type="radio" name="qvSugar" value="70%"><span>70%</span></label>
                                    <label class="option-chip"><input type="radio" name="qvSugar" value="50%"><span>50%</span></label>
                                    <label class="option-chip"><input type="radio" name="qvSugar" value="0%"><span>0%</span></label>
                                </div>
                            </div>
                            <div>
                                <div class="option-title">Lượng đá:</div>
                                <div class="chip-group">
                                    <label class="option-chip"><input type="radio" name="qvIce" value="100%" checked><span>100% Đá</span></label>
                                    <label class="option-chip"><input type="radio" name="qvIce" value="50%"><span>50% Đá</span></label>
                                    <label class="option-chip"><input type="radio" name="qvIce" value="0%"><span>Không đá</span></label>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px; margin-top: 20px; align-items: center;">
                            <div class="cart-item-stepper" style="height: 42px;">
                                <button type="button" id="qvMinus" style="width:36px; height:42px;">−</button>
                                <span id="qvQtyVal" style="min-width:36px;">1</span>
                                <button type="button" id="qvPlus" style="width:36px; height:42px;">+</button>
                            </div>
                            <button type="button" class="btn" id="qvAddBtn" style="flex: 1; padding: 12px;">🛒 Thêm vào giỏ</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalWrap);

        let qvQty = 1;
        const qvPriceEl = $("#qvPrice", modalWrap);
        const qvQtyValEl = $("#qvQtyVal", modalWrap);

        const updatePriceDisplay = () => {
            const size = $('input[name="qvSize"]:checked', modalWrap)?.value || "M";
            const curP = p.price + (size === "L" ? 8000 : 0);
            if (qvPriceEl) qvPriceEl.textContent = money(curP * qvQty);
        };

        $$('input[name="qvSize"]', modalWrap).forEach(r => r.addEventListener("change", updatePriceDisplay));

        $("#qvMinus", modalWrap).addEventListener("click", () => {
            if (qvQty > 1) { qvQty--; qvQtyValEl.textContent = qvQty; updatePriceDisplay(); }
        });
        $("#qvPlus", modalWrap).addEventListener("click", () => {
            if (qvQty < 99) { qvQty++; qvQtyValEl.textContent = qvQty; updatePriceDisplay(); }
        });

        $("#closeQv", modalWrap).addEventListener("click", () => modalWrap.remove());
        modalWrap.addEventListener("click", ev => {
            if (ev.target === modalWrap) modalWrap.remove();
        });

        $("#qvAddBtn", modalWrap).addEventListener("click", () => {
            const size = $('input[name="qvSize"]:checked', modalWrap)?.value || "M";
            const sugar = $('input[name="qvSugar"]:checked', modalWrap)?.value || "100%";
            const ice = $('input[name="qvIce"]:checked', modalWrap)?.value || "100%";
            addToCart(p, qvQty, { size, sugar, ice });
            modalWrap.remove();
        });
    }

    /* ---------- Header: menu mobile + dropdown tài khoản ---------- */
    function setupHeader() {
        const toggle = $("#navToggle");
        const menu = $("#mainMenu");

        if (toggle && menu) {
            toggle.addEventListener("click", () => {
                const open = menu.classList.toggle("open");
                toggle.classList.toggle("open", open);
                toggle.setAttribute("aria-expanded", open);
            });
            $$("a", menu).forEach(link => link.addEventListener("click", () => {
                menu.classList.remove("open");
                toggle.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }));
        }

        const header = $(".header");
        if (header) {
            const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 6);
            onScroll();
            window.addEventListener("scroll", onScroll, { passive: true });
        }
    }

    /* ---------- Nút lên đầu trang ---------- */
    function setupToTop() {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "to-top";
        btn.innerHTML = "↑";
        btn.setAttribute("aria-label", "Lên đầu trang");
        document.body.appendChild(btn);

        const toggle = () => btn.classList.toggle("show", window.scrollY > 480);
        toggle();
        window.addEventListener("scroll", toggle, { passive: true });
        btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    /* ---------- Hiệu ứng reveal khi cuộn ---------- */
    function setupReveal() {
        const elements = $$(".reveal");
        if (!elements.length || !("IntersectionObserver" in window)) {
            elements.forEach(el => el.classList.add("in"));
            return;
        }
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        elements.forEach(el => io.observe(el));
    }

    /* ---------- Tìm kiếm & lọc & sắp xếp (sanpham.html) ---------- */
    function setupShop() {
        const input = $("#productSearch");
        if (!input) return;

        const grid = $(".product-grid");
        const cards = $$(".product-card", grid);
        const noResults = $("#noResults");
        const sortSelect = $("#productSort");
        let filter = "all";

        function apply() {
            const q = input.value.toLowerCase().trim();
            const sortVal = sortSelect ? sortSelect.value : "default";
            let visibleCards = [];

            cards.forEach(card => {
                const p = products[card.dataset.id];
                const name = p ? p.name : card.textContent;
                const category = p ? p.category : "";
                const show = (filter === "all" || category === filter) && name.toLowerCase().includes(q);
                card.style.display = show ? "" : "none";
                if (show) visibleCards.push(card);
            });

            if (sortSelect && visibleCards.length > 1) {
                visibleCards.sort((a, b) => {
                    const pa = products[a.dataset.id];
                    const pb = products[b.dataset.id];
                    if (!pa || !pb) return 0;
                    if (sortVal === "price-asc") return pa.price - pb.price;
                    if (sortVal === "price-desc") return pb.price - pa.price;
                    if (sortVal === "name-asc") return pa.name.localeCompare(pb.name, "vi");
                    return 0;
                });
                visibleCards.forEach(card => grid.appendChild(card));
            }

            if (noResults) noResults.style.display = visibleCards.length ? "none" : "";
        }

        input.addEventListener("input", apply);
        if (sortSelect) sortSelect.addEventListener("change", apply);

        $$(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
            $$(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filter = btn.dataset.filter || "all";
            apply();
        }));
    }

    /* ---------- Trang chi tiết sản phẩm (chitiet.html) ---------- */
    function setupDetail() {
        const nameEl = $("#detail-name");
        if (!nameEl) return;

        const id = new URLSearchParams(location.search).get("id") || "tra-dao-cam-sa";
        const p = products[id] || products["tra-dao-cam-sa"];

        const set = (elId, value) => {
            const el = document.getElementById(elId);
            if (el) el.textContent = value;
        };

        const img = $("#detail-image");
        if (img) { img.src = p.image; img.alt = p.name; }
        set("detail-category", p.category);
        set("detail-name", p.name);
        set("detail-description", p.description);
        set("detail-ingredients", p.ingredients);
        set("detail-flavor", p.flavor);
        set("detail-suitable", p.suitable);

        document.title = p.name + " - Tea & Cafe";
        const crumb = $("#crumbName");
        if (crumb) crumb.textContent = p.name;

        // Cập nhật giá theo size
        const priceEl = $("#detail-price");
        let selectedSize = "M";

        function updateDetailPrice() {
            const extra = selectedSize === "L" ? 8000 : 0;
            if (priceEl) priceEl.textContent = money(p.price + extra);
        }
        updateDetailPrice();

        $$('input[name="size"]').forEach(r => r.addEventListener("change", ev => {
            selectedSize = ev.target.value;
            updateDetailPrice();
        }));

        /* Bộ tăng/giảm số lượng */
        const qtyInput = $("#detail-quantity");
        const clamp = v => Math.max(1, Math.min(99, parseInt(v, 10) || 1));
        const minus = $("#qtyMinus");
        const plus = $("#qtyPlus");
        if (qtyInput) {
            qtyInput.addEventListener("change", () => { qtyInput.value = clamp(qtyInput.value); });
            if (minus) minus.addEventListener("click", () => { qtyInput.value = clamp(Number(qtyInput.value) - 1); });
            if (plus) plus.addEventListener("click", () => { qtyInput.value = clamp(Number(qtyInput.value) + 1); });
        }

        const getSelectedOptions = () => {
            const size = $('input[name="size"]:checked')?.value || "M";
            const sugar = $('input[name="sugar"]:checked')?.value || "100%";
            const ice = $('input[name="ice"]:checked')?.value || "100%";
            return { size, sugar, ice };
        };

        const getQty = () => (qtyInput ? clamp(qtyInput.value) : 1);

        const addBtn = $("#add-detail-cart");
        if (addBtn) addBtn.addEventListener("click", () => addToCart(p, getQty(), getSelectedOptions()));

        const buyBtn = $("#buy-detail");
        if (buyBtn) buyBtn.addEventListener("click", () => {
            addToCart(p, getQty(), getSelectedOptions());
            setTimeout(() => location.href = "giohang.html", 350);
        });
    }

    /* ---------- Trang giỏ hàng & thanh toán (giohang.html) ---------- */
    function renderCart() {
        const list = $(".cart-list");
        if (!list) return;

        const cart = getCart();
        $$(".cart-item, .empty-cart", list).forEach(el => el.remove());

        const countEl = $(".cart-count");
        if (countEl) countEl.textContent = cart.reduce((s, x) => s + x.qty, 0) + " sản phẩm";

        const cont = $(".continue", list);
        const checkoutBox = $("#checkoutBox");
        const summaryAside = $(".cart-summary");

        if (!cart.length) {
            const empty = document.createElement("div");
            empty.className = "empty-cart";
            empty.innerHTML = `
                <div class="empty-icon">☕</div>
                <h3>Giỏ hàng đang trống</h3>
                <p>Hãy chọn những món thức uống thơm ngon bạn yêu thích nhé!</p>
                <a class="btn" href="sanpham.html">Khám phá thực đơn ngay</a>
            `;
            list.insertBefore(empty, cont || null);
            if (checkoutBox) checkoutBox.style.display = "none";
            setAppliedCoupon(null);
        } else if (checkoutBox) {
            checkoutBox.style.display = "";
        }

        cart.forEach((item, i) => {
            const row = document.createElement("div");
            row.className = "cart-item";
            const sizeLabel = item.size ? `Size ${item.size}` : "Size M";
            const optLabel = item.ice && item.sugar ? ` · ${item.ice} đá · ${item.sugar} đường` : "";

            row.innerHTML = `
                <img class="cart-thumb" src="${item.image}" alt="${item.name}">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>${(item.category ? item.category + " · " : "") + money(item.price)}</p>
                    <span class="cart-meta-tag">${sizeLabel}${optLabel}</span>
                </div>
                <div class="cart-item-stepper">
                    <button type="button" class="btn-step-minus" aria-label="Giảm">−</button>
                    <span>${item.qty}</span>
                    <button type="button" class="btn-step-plus" aria-label="Tăng">+</button>
                </div>
                <strong class="cart-total">${money(item.price * item.qty)}</strong>
                <button type="button" class="cart-remove" aria-label="Xóa">×</button>
            `;

            $(".btn-step-minus", row).addEventListener("click", () => {
                if (item.qty > 1) {
                    item.qty--;
                } else {
                    cart.splice(i, 1);
                    toast("Đã xóa món khỏi giỏ hàng.");
                }
                saveCart(cart);
                renderCart();
                updateCartBadge();
            });

            $(".btn-step-plus", row).addEventListener("click", () => {
                if (item.qty < 99) item.qty++;
                saveCart(cart);
                renderCart();
                updateCartBadge();
            });

            $(".cart-remove", row).addEventListener("click", () => {
                cart.splice(i, 1);
                saveCart(cart);
                renderCart();
                updateCartBadge();
                toast("Đã xóa món khỏi giỏ hàng.");
            });

            list.insertBefore(row, cont || null);
        });

        // Tính tiền & Mã giảm giá
        const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
        let ship = subtotal ? (subtotal >= 200000 ? 0 : 20000) : 0;
        let discount = 0;

        const applied = getAppliedCoupon();
        if (applied && VOUCHERS[applied.code] && subtotal > 0) {
            const v = VOUCHERS[applied.code];
            if (subtotal >= v.min) {
                if (v.type === "PERCENT") discount = Math.round(subtotal * (v.value / 100));
                else if (v.type === "FIXED") discount = v.value;
                else if (v.type === "SHIP") {
                    discount = Math.min(ship, v.value);
                }
            } else {
                setAppliedCoupon(null);
                toast(`Mã ${applied.code} chỉ áp dụng cho đơn từ ${money(v.min)}.`, true);
            }
        }

        const total = Math.max(0, subtotal + ship - discount);

        const sub = $("#sumSubtotal"), shipEl = $("#sumShip"),
            disc = $("#sumDiscount"), totalEl = $("#sumTotal");
        if (sub) sub.textContent = money(subtotal);
        if (shipEl) shipEl.textContent = ship === 0 && subtotal ? "Miễn phí" : money(ship);
        if (disc) disc.textContent = discount > 0 ? "-" + money(discount) : money(0);
        if (totalEl) totalEl.textContent = money(total);

        // Render Coupon Box nếu chưa có
        renderCouponSection(summaryAside, subtotal);

        // Cập nhật VietQR nếu đang chọn BANK
        updateVietQRInfo(total);
    }

    function renderCouponSection(summaryAside, subtotal) {
        if (!summaryAside) return;
        let cBox = $("#couponBox");
        if (!cBox) {
            cBox = document.createElement("div");
            cBox.id = "couponBox";
            cBox.className = "coupon-box";
            const checkoutBox = $("#checkoutBox");
            if (checkoutBox) summaryAside.insertBefore(cBox, checkoutBox);
            else summaryAside.appendChild(cBox);
        }

        const applied = getAppliedCoupon();

        if (applied) {
            cBox.innerHTML = `
                <div class="coupon-box-title">🎟️ Mã giảm giá đã áp dụng:</div>
                <div class="applied-coupon-tag">
                    <span>${applied.code} (${applied.name})</span>
                    <button type="button" class="remove-coupon-btn" id="removeCouponBtn" title="Hủy mã">&times;</button>
                </div>
            `;
            $("#removeCouponBtn").addEventListener("click", () => {
                setAppliedCoupon(null);
                renderCart();
                toast("Đã gỡ mã giảm giá.");
            });
        } else {
            cBox.innerHTML = `
                <div class="coupon-box-title">🎟️ Mã ưu đãi / Voucher</div>
                <div class="coupon-form">
                    <input type="text" id="couponInput" class="coupon-input" placeholder="Nhập mã ưu đãi...">
                    <button type="button" id="applyCouponBtn" class="coupon-btn">Áp dụng</button>
                </div>
                <div class="voucher-suggestions">
                    <span>Gợi ý:</span>
                    <button type="button" class="voucher-chip" data-code="WELCOME10">WELCOME10 (-10%)</button>
                    <button type="button" class="voucher-chip" data-code="FREESHIP">FREESHIP (-20k)</button>
                    <button type="button" class="voucher-chip" data-code="CAFE20K">CAFE20K (-20k)</button>
                </div>
            `;

            const applyCode = (code) => {
                code = (code || "").trim().toUpperCase();
                if (!code) { toast("Vui lòng nhập mã ưu đãi!", true); return; }
                const v = VOUCHERS[code];
                if (!v) { toast("Mã ưu đãi không hợp lệ hoặc đã hết hạn.", true); return; }
                if (subtotal < v.min) {
                    toast(`Mã ${code} áp dụng cho đơn hàng từ ${money(v.min)}.`, true);
                    return;
                }
                setAppliedCoupon({ code, name: v.name });
                toast(`Áp dụng thành công mã "${code}"!`);
                renderCart();
            };

            $("#applyCouponBtn").addEventListener("click", () => applyCode($("#couponInput").value));
            $$(".voucher-chip", cBox).forEach(ch => ch.addEventListener("click", () => applyCode(ch.dataset.code)));
        }
    }

    function updateVietQRInfo(total) {
        const payment = $("#paymentMethod");
        const bankInfo = $("#bankInfo");
        if (!payment || !bankInfo) return;

        if (payment.value === "BANK" && total > 0) {
            const phone = ($("#checkoutPhone")?.value || "").trim() || "KHACH";
            const qrUrl = `https://img.vietqr.io/image/vietcombank-0123456789-compact2.png?amount=${total}&addInfo=TEACAFE%20${phone}&accountName=NGUYEN%20VAN%20BAO`;

            bankInfo.innerHTML = `
                <div class="vietqr-card">
                    <h4>💳 Quét mã VietQR chuyển khoản nhanh</h4>
                    <div class="vietqr-img-wrap">
                        <img src="${qrUrl}" alt="VietQR Thanh toán" class="vietqr-img" onerror="this.onerror=null; this.src='Bank.png';">
                    </div>
                    <div class="vietqr-details">
                        <div class="vietqr-row"><span>Ngân hàng:</span> <strong>Vietcombank (VCB)</strong></div>
                        <div class="vietqr-row">
                            <span>Số tài khoản:</span> 
                            <strong>0123456789 <button type="button" class="copy-badge" data-copy="0123456789">Sao chép</button></strong>
                        </div>
                        <div class="vietqr-row"><span>Chủ tài khoản:</span> <strong>NGUYEN VAN BAO</strong></div>
                        <div class="vietqr-row"><span>Số tiền:</span> <strong>${money(total)}</strong></div>
                        <div class="vietqr-row">
                            <span>Nội dung CK:</span> 
                            <strong>TEACAFE ${phone} <button type="button" class="copy-badge" data-copy="TEACAFE ${phone}">Sao chép</button></strong>
                        </div>
                    </div>
                </div>
            `;
            bankInfo.style.display = "";

            $$(".copy-badge", bankInfo).forEach(btn => btn.addEventListener("click", () => {
                navigator.clipboard?.writeText(btn.dataset.copy).then(() => {
                    toast(`Đã sao chép: ${btn.dataset.copy}`);
                }).catch(() => {
                    toast(`Nội dung: ${btn.dataset.copy}`);
                });
            }));
        } else if (payment.value !== "BANK") {
            bankInfo.style.display = "none";
        }
    }

    /* ---------- Cửa sổ thông báo đặt hàng thành công ---------- */
    function showOrderSuccess(order, total) {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        overlay.innerHTML = `
            <div class="modal" role="dialog" aria-modal="true">
                <div class="modal-icon">✓</div>
                <h3>Đặt hàng thành công!</h3>
                <p>Mã đơn hàng: <strong>#${order.id}</strong></p>
                <p>Tổng tiền: <strong>${money(total)}</strong></p>
                <p>Phương thức: <strong>${order.payment}</strong></p>
                <p style="margin-top: 10px; font-size: 13.5px; color: var(--muted);">Chúng tôi sẽ liên hệ hotline xác nhận và giao đồ uống tới bạn ngay!</p>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button type="button" class="btn" id="modalViewOrders">Xem đơn hàng</button>
                    <button type="button" class="btn btn-outline" id="modalHome">Về trang chủ</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        $("#modalHome", overlay).addEventListener("click", () => location.href = "index.html");
        $("#modalViewOrders", overlay).addEventListener("click", () => {
            overlay.remove();
            openMyOrdersModal(order.customer.phone);
        });
    }

    /* ---------- Thanh toán ---------- */
    function setupCheckout() {
        const form = $("#checkoutForm");
        if (!form) return;

        const payment = $("#paymentMethod");
        if (payment) {
            payment.addEventListener("change", () => renderCart());
        }

        const phoneInput = $("#checkoutPhone");
        if (phoneInput) {
            phoneInput.addEventListener("input", () => {
                if (payment && payment.value === "BANK") renderCart();
            });
        }

        form.addEventListener("submit", e => {
            e.preventDefault();

            const cart = getCart();
            if (!cart.length) {
                toast("Giỏ hàng đang trống, hãy chọn món uống trước nhé!", true);
                return;
            }

            const name = ($("#checkoutName")?.value || "").trim();
            const phone = ($("#checkoutPhone")?.value || "").trim();
            const address = ($("#checkoutAddress")?.value || "").trim();
            const note = ($("#checkoutNote")?.value || "").trim();

            if (!name || !phone || !address) {
                toast("Vui lòng nhập đầy đủ họ tên, SĐT và địa chỉ nhận hàng.", true);
                return;
            }

            const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
            let shipping = subtotal >= 200000 ? 0 : 20000;
            let discount = 0;

            const applied = getAppliedCoupon();
            if (applied && VOUCHERS[applied.code]) {
                const v = VOUCHERS[applied.code];
                if (v.type === "PERCENT") discount = Math.round(subtotal * (v.value / 100));
                else if (v.type === "FIXED") discount = v.value;
                else if (v.type === "SHIP") discount = Math.min(shipping, v.value);
            }

            const total = Math.max(0, subtotal + shipping - discount);

            const orders = readJSON(ORDERS_KEY, []);
            const orderId = "TC" + Date.now().toString().slice(-6);
            const order = {
                id: orderId,
                time: new Date().toLocaleString("vi-VN"),
                status: "Chờ xác nhận",
                payment: payment && payment.value === "BANK" ? "Chuyển khoản ngân hàng" : "COD (Tiền mặt)",
                customer: { name, phone, address, note },
                items: JSON.parse(JSON.stringify(cart)),
                subtotal,
                shipping,
                discount,
                coupon: applied ? applied.code : "",
                total
            };

            orders.unshift(order);
            writeJSON(ORDERS_KEY, orders);

            saveCart([]);
            setAppliedCoupon(null);
            updateCartBadge();
            renderCart();
            showOrderSuccess(order, total);
        });
    }

    /* ---------- Tài khoản: Đăng ký / Đăng nhập / Đăng xuất ---------- */
    function getUsers() { return readJSON(USER_KEY, []); }

    function createDefaultAdmin() {
        const users = getUsers();
        let changed = false;
        if (!users.some(u => u.username === "admin")) {
            users.push({ name: "Quản trị viên", username: "admin", password: "admin123", role: "admin" });
            changed = true;
        }
        if (!users.some(u => u.username === "khach")) {
            users.push({ name: "Nguyễn Văn Khách", username: "khach", password: "123456", role: "customer" });
            changed = true;
        }
        if (changed) writeJSON(USER_KEY, users);
    }

    function setupRegister() {
        const form = $("#registerForm");
        if (!form) return;
        form.addEventListener("submit", e => {
            e.preventDefault();
            const name = ($("#registerName")?.value || "").trim();
            const username = ($("#registerUsername")?.value || "").trim();
            const password = $("#registerPassword")?.value || "";
            const confirm = $("#registerConfirmPassword")?.value || "";

            if (!name || !username || !password || !confirm) { toast("Vui lòng nhập đầy đủ thông tin.", true); return; }
            if (password.length < 6) { toast("Mật khẩu phải có ít nhất 6 ký tự.", true); return; }
            if (password !== confirm) { toast("Mật khẩu nhập lại không khớp.", true); return; }

            const users = getUsers();
            if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
                toast("Tên đăng nhập đã tồn tại, vui lòng chọn tên khác.", true);
                return;
            }
            users.push({ name, username, password, role: "customer" });
            writeJSON(USER_KEY, users);
            toast("Đăng ký thành công! Đang chuyển đến trang đăng nhập...");
            setTimeout(() => location.href = "dangnhap.html", 900);
        });
    }

    function setupLogin() {
        const form = $("#loginForm");
        if (!form) return;

        form.addEventListener("submit", e => {
            e.preventDefault();

            const username = ($("#loginUsername")?.value || "").trim();
            const password = $("#loginPassword")?.value || "";

            const user = getUsers().find(
                u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
            );

            if (!user) {
                toast("Tên đăng nhập hoặc mật khẩu không chính xác.", true);
                return;
            }

            writeJSON(LOGIN_KEY, {
                name: user.name,
                username: user.username,
                role: user.role
            });

            toast(`Xin chào, ${user.name}! Đăng nhập thành công.`);

            setTimeout(() => {
                if (user.role === "admin") {
                    location.href = "admin.html";
                } else {
                    location.href = "index.html";
                }
            }, 600);
        });

        // Quick demo fill buttons
        const fillAdmin = $("#demoFillAdmin");
        const fillUser = $("#demoFillUser");
        if (fillAdmin) {
            fillAdmin.addEventListener("click", () => {
                if ($("#loginUsername")) $("#loginUsername").value = "admin";
                if ($("#loginPassword")) $("#loginPassword").value = "admin123";
                toast("Đã điền tài khoản Quản trị viên mẫu.");
            });
        }
        if (fillUser) {
            fillUser.addEventListener("click", () => {
                if ($("#loginUsername")) $("#loginUsername").value = "khach";
                if ($("#loginPassword")) $("#loginPassword").value = "123456";
                toast("Đã điền tài khoản Khách hàng mẫu.");
            });
        }

        // Toggle ẩn/hiện mật khẩu
        $$(".pwd-toggle-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const input = btn.previousElementSibling;
                if (!input) return;
                if (input.type === "password") {
                    input.type = "text";
                    btn.textContent = "🙈";
                } else {
                    input.type = "password";
                    btn.textContent = "👁️";
                }
            });
        });
    }

    function currentUser() { return readJSON(LOGIN_KEY, null); }

    /* ---------- Cập nhật Header & Dropdown người dùng ---------- */
    function updateCustomerAccount() {
        const headerActions = $(".header-actions");
        if (!headerActions) return;

        const user = currentUser();

        // Xóa menu cũ nếu có
        const oldMenu = $(".user-menu", headerActions);
        if (oldMenu) oldMenu.remove();

        const loginLink = $("#customerLoginLink") || $(".login-link:not(.js-logout)", headerActions);

        if (!user) {
            if (loginLink) {
                loginLink.textContent = "Đăng nhập";
                loginLink.href = "dangnhap.html";
                loginLink.style.display = "";
            }
            return;
        }

        // Đã đăng nhập -> ẩn link đăng nhập mặc định và hiện User Dropdown Menu
        if (loginLink) loginLink.style.display = "none";

        const firstChar = (user.name || "U").charAt(0).toUpperCase();
        const userMenu = document.createElement("div");
        userMenu.className = "user-menu";
        userMenu.innerHTML = `
            <button type="button" class="user-btn" id="userBtn" aria-expanded="false">
                <span class="user-avatar">${firstChar}</span>
                <span class="user-name">${user.name}</span>
                <span style="font-size: 11px;">▼</span>
            </button>
            <div class="user-dropdown" id="userDropdown">
                <button type="button" id="menuMyOrders">📦 Đơn hàng của tôi</button>
                ${user.role === "admin" ? '<a href="admin.html">⚙️ Trang Quản trị</a>' : ""}
                <div class="dropdown-divider"></div>
                <button type="button" class="logout-item js-do-logout">🚪 Đăng xuất</button>
            </div>
        `;

        headerActions.appendChild(userMenu);

        const uBtn = $("#userBtn", userMenu);
        const uDrop = $("#userDropdown", userMenu);

        uBtn.addEventListener("click", e => {
            e.stopPropagation();
            const isOpen = uDrop.classList.toggle("show");
            uBtn.classList.toggle("active", isOpen);
            uBtn.setAttribute("aria-expanded", isOpen);
        });

        document.addEventListener("click", () => {
            uDrop.classList.remove("show");
            uBtn.classList.remove("active");
            uBtn.setAttribute("aria-expanded", "false");
        });

        $("#menuMyOrders", userMenu).addEventListener("click", () => {
            uDrop.classList.remove("show");
            openMyOrdersModal();
        });

        $(".js-do-logout", userMenu).addEventListener("click", () => {
            localStorage.removeItem(LOGIN_KEY);
            toast("Đã đăng xuất tài khoản.");
            updateCustomerAccount();
            if (location.pathname.toLowerCase().endsWith("admin.html")) {
                setTimeout(() => location.href = "index.html", 400);
            }
        });
    }

    function setupLogout() {
        $$("#adminLogout").forEach(btn => {
            if (btn.dataset.logoutReady === "1") return;
            btn.dataset.logoutReady = "1";
            btn.addEventListener("click", e => {
                e.preventDefault();
                localStorage.removeItem(LOGIN_KEY);
                toast("Đã đăng xuất tài khoản.");
                updateCustomerAccount();
                if (location.pathname.toLowerCase().endsWith("admin.html")) {
                    setTimeout(() => location.href = "index.html", 500);
                }
            });
        });
    }

    /* ---------- Lịch sử đơn hàng của tôi (Modal) ---------- */
    function openMyOrdersModal(filterPhone) {
        const orders = readJSON(ORDERS_KEY, []);
        const user = currentUser();

        let filtered = orders;
        if (filterPhone) {
            filtered = orders.filter(o => o.customer && o.customer.phone === filterPhone);
        } else if (user && user.role !== "admin") {
            filtered = orders.filter(o => o.customer && o.customer.name.toLowerCase() === user.name.toLowerCase());
        }

        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";

        const statuses = ["Chờ xác nhận", "Đang chuẩn bị", "Đang giao", "Đã giao"];

        overlay.innerHTML = `
            <div class="history-modal-content">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid var(--line); padding-bottom: 14px; margin-bottom: 20px;">
                    <div>
                        <h2 style="font-family:var(--font-display); font-size:24px; color:var(--coffee-dark); margin:0;">Lịch sử đơn hàng</h2>
                        <span style="font-size:13px; color:var(--muted);">Theo dõi tiến trình các món uống đang được giao đến bạn</span>
                    </div>
                    <button type="button" id="closeHistory" style="border:0; background:none; font-size:26px; cursor:pointer; color:var(--muted);">&times;</button>
                </div>

                <div style="margin-bottom: 16px; display: flex; gap: 8px;">
                    <input type="text" id="trackPhoneInput" class="coupon-input" placeholder="Nhập SĐT để tra cứu đơn..." value="${filterPhone || ""}">
                    <button type="button" id="trackPhoneBtn" class="coupon-btn">Tra cứu</button>
                </div>

                <div id="historyList">
                    ${!filtered.length ? `
                        <div style="text-align:center; padding: 40px 20px; color:var(--muted);">
                            <div style="font-size:40px; margin-bottom:10px;">📦</div>
                            <p>Không tìm thấy đơn hàng nào.</p>
                        </div>
                    ` : filtered.map(o => {
                        const curIdx = statuses.indexOf(o.status);
                        return `
                            <div class="history-card">
                                <div class="history-card-header">
                                    <div>
                                        <strong>Đơn hàng #${o.id}</strong>
                                        <div style="font-size:12px; color:var(--muted);">${o.time} · ${o.payment}</div>
                                    </div>
                                    <span class="order-status" style="font-size:12px;">${o.status}</span>
                                </div>

                                <div class="history-steps">
                                    ${statuses.map((st, idx) => `
                                        <div class="step-item ${idx <= curIdx ? "active" : ""}">
                                            <div class="step-dot">${idx <= curIdx ? "✓" : idx + 1}</div>
                                            <span>${st}</span>
                                        </div>
                                    `).join("")}
                                </div>

                                <div style="margin-top: 12px; font-size: 13.5px; border-top: 1px dashed var(--line); padding-top: 8px;">
                                    ${(o.items || []).map(it => `
                                        <div style="display:flex; justify-content:space-between; padding:3px 0; color:var(--text);">
                                            <span>${it.name} ${it.size ? `(${it.size})` : ""} × ${it.qty}</span>
                                            <strong>${money(it.price * it.qty)}</strong>
                                        </div>
                                    `).join("")}
                                    <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:15px; font-weight:800; color:var(--coffee);">
                                        <span>Tổng thanh toán:</span>
                                        <span>${money(o.total)}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        $("#closeHistory", overlay).addEventListener("click", () => overlay.remove());
        overlay.addEventListener("click", ev => {
            if (ev.target === overlay) overlay.remove();
        });

        $("#trackPhoneBtn", overlay).addEventListener("click", () => {
            const p = ($("#trackPhoneInput", overlay).value || "").trim();
            overlay.remove();
            openMyOrdersModal(p);
        });
    }

    /* ---------- Trang quản trị (admin.html) ---------- */
    function protectAdmin() {
        if (!location.pathname.toLowerCase().endsWith("admin.html")) return true;
        const user = currentUser();
        if (!user || user.role !== "admin") {
            toast("Bạn cần đăng nhập tài khoản Admin để truy cập trang quản trị.", true);
            setTimeout(() => location.href = "dangnhap.html", 900);
            return false;
        }
        return true;
    }

    const ORDER_STATUSES = ["Chờ xác nhận", "Đang chuẩn bị", "Đang giao", "Đã giao", "Đã hủy"];
    let currentAdminTab = "orders";
    let currentAdminFilter = "all";

    function renderAdminOrders() {
        const box = $("#adminOrders");
        if (!box) return;

        const user = currentUser();
        const nameEl = $("#adminName");
        if (nameEl && user) nameEl.textContent = user.name;

        const orders = readJSON(ORDERS_KEY, []);
        const contacts = readJSON(CONTACT_KEY, []);

        /* Thống kê nhanh */
        const statOrders = $("#statOrders");
        const statPending = $("#statPending");
        const statRevenue = $("#statRevenue");
        if (statOrders) statOrders.textContent = orders.length;
        if (statPending) statPending.textContent = orders.filter(o => o.status === "Chờ xác nhận").length;
        if (statRevenue) statRevenue.textContent = money(
            orders.filter(o => o.status !== "Đã hủy").reduce((s, o) => s + (Number(o.total) || 0), 0)
        );

        // Render Tabs điều hướng Admin nếu chưa có
        let tabsContainer = $("#adminTabsNav");
        if (!tabsContainer) {
            tabsContainer = document.createElement("div");
            tabsContainer.id = "adminTabsNav";
            tabsContainer.className = "admin-tabs";
            tabsContainer.innerHTML = `
                <button type="button" class="admin-tab-btn ${currentAdminTab === 'orders' ? 'active' : ''}" data-tab="orders">
                    📦 Quản lý Đơn hàng <span class="tab-badge">${orders.length}</span>
                </button>
                <button type="button" class="admin-tab-btn ${currentAdminTab === 'contacts' ? 'active' : ''}" data-tab="contacts">
                    ✉️ Tin nhắn khách hàng <span class="tab-badge">${contacts.length}</span>
                </button>
            `;
            box.parentNode.insertBefore(tabsContainer, box);

            $$(".admin-tab-btn", tabsContainer).forEach(btn => btn.addEventListener("click", () => {
                currentAdminTab = btn.dataset.tab;
                $$(".admin-tab-btn", tabsContainer).forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderAdminOrders();
            }));
        }

        // TAB TIN NHẮN KHÁCH HÀNG
        if (currentAdminTab === "contacts") {
            let filterBar = $("#adminFilterBar");
            if (filterBar) filterBar.style.display = "none";

            if (!contacts.length) {
                box.innerHTML = `
                    <div class="admin-empty">
                        <div class="admin-empty-icon">✉️</div>
                        <h2>Chưa có tin nhắn liên hệ</h2>
                        <p>Khi khách hàng gửi form liên hệ trên website, tin nhắn sẽ hiển thị tại đây.</p>
                    </div>
                `;
                return;
            }

            box.innerHTML = contacts.map((c, i) => `
                <div class="contact-item-card">
                    <div class="contact-item-header">
                        <div>
                            <strong>${c.name}</strong> · <a href="mailto:${c.email}" style="color:var(--coffee);">${c.email}</a> · <span>SĐT: ${c.phone || "Không có"}</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:12px; color:var(--muted);">${c.time}</span>
                            <button type="button" class="delete-order" data-contact-idx="${i}" style="padding:4px 10px; font-size:12px;">🗑️ Xóa</button>
                        </div>
                    </div>
                    <div style="font-weight:700; color:var(--coffee-dark); font-size:14.5px;">Chủ đề: ${c.subject || "Thắc mắc chung"}</div>
                    <div class="contact-item-body">${c.message}</div>
                </div>
            `).join("");

            $$("[data-contact-idx]", box).forEach(btn => btn.addEventListener("click", () => {
                if (!confirm("Bạn có chắc muốn xóa tin nhắn này?")) return;
                const idx = Number(btn.dataset.contactIdx);
                const all = readJSON(CONTACT_KEY, []);
                all.splice(idx, 1);
                writeJSON(CONTACT_KEY, all);
                toast("Đã xóa tin nhắn liên hệ.");
                renderAdminOrders();
            }));
            return;
        }

        // TAB QUẢN LÝ ĐƠN HÀNG
        let filterBar = $("#adminFilterBar");
        if (!filterBar) {
            filterBar = document.createElement("div");
            filterBar.id = "adminFilterBar";
            filterBar.className = "admin-filter-bar";
            filterBar.innerHTML = `
                <button type="button" class="admin-filter-btn ${currentAdminFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${orders.length})</button>
                ${ORDER_STATUSES.map(st => {
                    const cnt = orders.filter(o => o.status === st).length;
                    return `<button type="button" class="admin-filter-btn ${currentAdminFilter === st ? 'active' : ''}" data-filter="${st}">${st} (${cnt})</button>`;
                }).join("")}
            `;
            box.parentNode.insertBefore(filterBar, box);

            $$(".admin-filter-btn", filterBar).forEach(btn => btn.addEventListener("click", () => {
                currentAdminFilter = btn.dataset.filter;
                $$(".admin-filter-btn", filterBar).forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderAdminOrders();
            }));
        } else {
            filterBar.style.display = "";
            filterBar.innerHTML = `
                <button type="button" class="admin-filter-btn ${currentAdminFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${orders.length})</button>
                ${ORDER_STATUSES.map(st => {
                    const cnt = orders.filter(o => o.status === st).length;
                    return `<button type="button" class="admin-filter-btn ${currentAdminFilter === st ? 'active' : ''}" data-filter="${st}">${st} (${cnt})</button>`;
                }).join("")}
            `;
            $$(".admin-filter-btn", filterBar).forEach(btn => btn.addEventListener("click", () => {
                currentAdminFilter = btn.dataset.filter;
                $$(".admin-filter-btn", filterBar).forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderAdminOrders();
            }));
        }

        const filteredOrders = currentAdminFilter === "all" ? orders : orders.filter(o => o.status === currentAdminFilter);

        if (!filteredOrders.length) {
            box.innerHTML = `
                <div class="admin-empty">
                    <div class="admin-empty-icon">📦</div>
                    <h2>Không có đơn hàng nào</h2>
                    <p>${currentAdminFilter === "all" ? "Khi khách hàng đặt đồ uống, đơn hàng sẽ xuất hiện ở đây." : `Không có đơn nào ở trạng thái "${currentAdminFilter}".`}</p>
                </div>
            `;
            return;
        }

        box.innerHTML = "";

        filteredOrders.forEach((order) => {
            const globalIdx = orders.findIndex(o => o.id === order.id);
            const el = document.createElement("div");
            el.className = "admin-order";
            el.dataset.status = order.status;

            el.innerHTML = `
                <div class="admin-order-header">
                    <div>
                        <strong>Đơn hàng #${order.id}</strong>
                        <p>${order.time} · <strong>${order.payment || "COD"}</strong></p>
                    </div>
                    <span class="order-status">${order.status}</span>
                </div>
                <div class="admin-customer">
                    <h3>👤 Thông tin người nhận</h3>
                    <p><strong>Tên:</strong> ${order.customer?.name || "Khách vãng lai"}</p>
                    <p><strong>SĐT:</strong> <a href="tel:${order.customer?.phone}" style="color:var(--coffee); font-weight:700;">${order.customer?.phone}</a></p>
                    <p><strong>Địa chỉ:</strong> ${order.customer?.address}</p>
                    ${order.customer?.note ? `<p style="color:var(--amber);"><strong>Ghi chú của khách:</strong> ${order.customer.note}</p>` : ""}
                </div>
                <div class="admin-products">
                    <h3>🛒 Danh sách đồ uống</h3>
                    ${(order.items || []).map(x => `
                        <div class="admin-product">
                            <div>
                                <span>${x.name} × ${x.qty}</span>
                                ${x.size ? `<span style="font-size:12px; color:var(--muted);"> (${x.size}${x.ice ? ` · ${x.ice} đá` : ""})</span>` : ""}
                            </div>
                            <strong>${money(x.price * x.qty)}</strong>
                        </div>
                    `).join("")}
                    ${order.discount ? `
                        <div class="admin-product" style="color:var(--green); font-weight:700;">
                            <span>Mã giảm giá (${order.coupon || "VOUCHER"}):</span>
                            <span>-${money(order.discount)}</span>
                        </div>
                    ` : ""}
                </div>
                <div class="admin-order-bottom">
                    <div class="admin-total">Tổng tiền: <strong>${money(order.total)}</strong></div>
                    <div class="admin-controls">
                        <button type="button" class="btn-invoice" data-invoice-id="${order.id}">🖨️ In hóa đơn</button>
                        <select class="order-status-select" data-index="${globalIdx}" aria-label="Trạng thái đơn hàng">
                            ${ORDER_STATUSES.map(s => `<option value="${s}" ${order.status === s ? "selected" : ""}>${s}</option>`).join("")}
                        </select>
                        <button type="button" class="delete-order" data-index="${globalIdx}">🗑️ Xóa</button>
                    </div>
                </div>
            `;
            box.appendChild(el);
        });

        $$(".order-status-select", box).forEach(select => select.addEventListener("change", () => {
            const all = readJSON(ORDERS_KEY, []);
            const idx = Number(select.dataset.index);
            if (all[idx]) {
                all[idx].status = select.value;
                writeJSON(ORDERS_KEY, all);
            }
            renderAdminOrders();
            toast("Đã cập nhật trạng thái đơn hàng.");
        }));

        $$(".delete-order", box).forEach(btn => btn.addEventListener("click", () => {
            if (!confirm("Bạn có chắc muốn xóa đơn hàng này vĩnh viễn?")) return;
            const all = readJSON(ORDERS_KEY, []);
            all.splice(Number(btn.dataset.index), 1);
            writeJSON(ORDERS_KEY, all);
            renderAdminOrders();
            toast("Đã xóa đơn hàng.");
        }));

        $$(".btn-invoice", box).forEach(btn => btn.addEventListener("click", () => {
            const oId = btn.dataset.invoiceId;
            const targetOrder = orders.find(o => o.id === oId);
            if (targetOrder) openInvoiceModal(targetOrder);
        }));
    }

    /* ---------- In & Xem hóa đơn (Admin) ---------- */
    function openInvoiceModal(order) {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";

        overlay.innerHTML = `
            <div class="invoice-paper">
                <div class="invoice-header">
                    <h2>☕ TEA & CAFE</h2>
                    <p>Địa chỉ: 123 Đường Cà Phê, Quận 1, TP.HCM</p>
                    <p>Hotline: 097 368 3235 · Website: teaandcafe.vn</p>
                    <div style="margin-top:8px; font-weight:700; font-size:15px; letter-spacing:1px;">PHIẾU THANH TOÁN</div>
                </div>

                <div class="invoice-meta">
                    <div><strong>Mã HĐ:</strong> #${order.id}</div>
                    <div><strong>Thời gian:</strong> ${order.time}</div>
                    <div><strong>Khách hàng:</strong> ${order.customer?.name} (${order.customer?.phone})</div>
                    <div><strong>Địa chỉ:</strong> ${order.customer?.address}</div>
                    <div><strong>Thanh toán:</strong> ${order.payment}</div>
                </div>

                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th>Món uống</th>
                            <th style="text-align:center;">SL</th>
                            <th style="text-align:right;">Đ.Giá</th>
                            <th style="text-align:right;">T.Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(order.items || []).map(it => `
                            <tr>
                                <td>
                                    <strong>${it.name}</strong>
                                    ${it.size ? `<br><small style="color:#666;">Size ${it.size}${it.ice ? ` - ${it.ice} đá` : ""}</small>` : ""}
                                </td>
                                <td style="text-align:center;">${it.qty}</td>
                                <td style="text-align:right;">${money(it.price)}</td>
                                <td style="text-align:right;">${money(it.price * it.qty)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>

                <div style="font-size:13px; line-height:1.8;">
                    <div style="display:flex; justify-content:space-between;">
                        <span>Tiền hàng:</span>
                        <span>${money(order.subtotal || order.total)}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span>Phí giao hàng:</span>
                        <span>${order.shipping ? money(order.shipping) : "Miễn phí"}</span>
                    </div>
                    ${order.discount ? `
                        <div style="display:flex; justify-content:space-between; color:var(--green);">
                            <span>Giảm giá (${order.coupon || "Voucher"}):</span>
                            <span>-${money(order.discount)}</span>
                        </div>
                    ` : ""}
                </div>

                <div class="invoice-total-row">
                    <span>TỔNG CỘNG:</span>
                    <span>${money(order.total)}</span>
                </div>

                <div class="invoice-footer">
                    <p>Cảm ơn quý khách đã ủng hộ Tea & Cafe!</p>
                    <p>Hẹn gặp lại quý khách lần sau ❤️</p>
                </div>

                <div class="invoice-actions">
                    <button type="button" class="btn" id="doPrint">🖨️ In hóa đơn</button>
                    <button type="button" class="btn btn-outline" id="closeInvoice">Đóng</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        $("#closeInvoice", overlay).addEventListener("click", () => overlay.remove());
        overlay.addEventListener("click", ev => {
            if (ev.target === overlay) overlay.remove();
        });

        $("#doPrint", overlay).addEventListener("click", () => {
            window.print();
        });
    }

    /* ---------- Liên hệ ---------- */
    function setupContact() {
        const form = $("#contactForm");
        if (!form) return;
        form.addEventListener("submit", e => {
            e.preventDefault();
            const get = id => ($("#" + id)?.value || "").trim();
            const entry = {
                id: "LH" + Date.now().toString().slice(-6),
                time: new Date().toLocaleString("vi-VN"),
                name: get("contactName"),
                email: get("contactEmail"),
                phone: get("contactPhone"),
                subject: get("contactSubject"),
                message: get("contactMessage")
            };

            if (!entry.name || !entry.email || !entry.message) {
                toast("Vui lòng điền họ tên, email và lời nhắn của bạn.", true);
                return;
            }

            const all = readJSON(CONTACT_KEY, []);
            all.unshift(entry);
            writeJSON(CONTACT_KEY, all);
            toast("Cảm ơn bạn! Tin nhắn đã được gửi đến Tea & Cafe.");
            form.reset();
        });
    }

    /* ---------- Khởi chạy ---------- */
    document.addEventListener("DOMContentLoaded", () => {
        createDefaultAdmin();

        syncProductCards();
        updateCartBadge();

        setupHeader();
        setupToTop();
        setupReveal();
        setupShop();
        setupDetail();

        renderCart();
        setupCheckout();

        setupRegister();
        setupLogin();

        // Hiển thị trạng thái tài khoản trên Header
        updateCustomerAccount();
        setupLogout();

        setupContact();

        const year = $("#year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        if (protectAdmin()) {
            renderAdminOrders();
        }
    });
})();
