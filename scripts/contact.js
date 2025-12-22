// 聯絡表單處理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 取得表單資料
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 這裡可以加入實際的表單提交邏輯
            // 例如：發送到後端 API 或使用 EmailJS 等服務
            console.log('表單資料:', formData);
            
            // 顯示成功訊息
            alert('感謝您的訊息！我們會盡快與您聯絡。');
            
            // 重置表單
            contactForm.reset();
        });
    }
});

