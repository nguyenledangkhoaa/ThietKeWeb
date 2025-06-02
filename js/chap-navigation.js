document.querySelectorAll("a.btn").forEach(btn => {
    btn.addEventListener("click", async function (e) {
        const url = this.href;
        if (!url || url === "#" || url === window.location.href) {
            e.preventDefault();
            alert("Không có chương kế tiếp!");
            return;
        }

        e.preventDefault();

        try {
            const res = await fetch(url, { method: 'HEAD' });
            if (res.ok) {
                window.location.href = url;
            } else {
                alert("Không có chương kế tiếp!");
            }
        } catch {
            alert("Không có chương kế tiếp!");
        }
    });
});
