class PopupService {
    getUrlAsync() {
        return Promise.resolve('https://telex.hu/');
    }

    openPopup() {
        this.getUrlAsync().then(url => {
            const width = window.screen.width / 2;
            const height = window.screen.height / 2;
            const left = (window.screen.width - width) / 2;
            const top = (window.screen.height - height) / 2;

            const properties = {
                toolbar: false,
                scrollbars: true,
                resizable: true,
                width,
                height,
                top,
                left
            };

            const propString = Object.keys(properties).map(prop => `${prop}=${properties[prop]}`).join(', ')

            const popup = window.open('', 'unique-name', propString);
            popup.focus();
            popup.location.href = url;
        });
    }
}

window.services = window.services || {};
window.services.PopupService = PopupService;
