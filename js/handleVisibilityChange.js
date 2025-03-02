    const originalTitle = "苦节の小窝😘😘";
    const awayTitle = "怎么走了...不爱我了吗😭😭";
    const returnTitle = "我就知道你会回来😚😚";

    function handleVisibilityChange() {
        if (document.visibilityState === 'hidden') {
            document.title = awayTitle; // 切换到离开标题
        } else {
            document.title = returnTitle; // 切换到回来标题
            // 设置定时器，恢复原始标题
            setTimeout(() => {
                document.title = originalTitle;
            }, 2000); // 2秒后恢复原始标题
        }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
