function removeSelector(selector) {
    try {
        var items = document.querySelectorAll(selector);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                if (item.parentNode) item.parentNode.removeChild(item);
                else if (typeof item.remove === 'function') item.remove();
            }
        }
    } catch (e) {
        console.error(selector + ' - remove error:', e);
    }
}

function widerMainContent() {
    // If we've removed sidebars, expand the main column to full width.
    try {
        var main = document.querySelector('.main-col');
        if (main && main.classList) {
            // Remove the 8-column classes if present and add 12-column classes
            try {
                main.classList.remove('col-md-8');
            } catch (_) {}
            try {
                main.classList.remove('col-sm-8');
            } catch (_) {}
            if (!main.classList.contains('col-md-12')) main.classList.add('col-md-12');
            if (!main.classList.contains('col-sm-12')) main.classList.add('col-sm-12');
        }
    } catch (e) {
        console.error('adjust main-col classes error', e);
    }
}

function removeRankedItems() {
    // Remove any .post-content_item that has a .summary-heading containing "Hạng"
    try {
        var items = document.querySelectorAll('.post-content_item');
        for (var i = 0; i < items.length; i++) {
            try {
                var item = items[i];
                var heading = item.querySelector('.summary-heading');
                if (heading && heading.textContent && heading.textContent.trim() == 'Hạng') {
                    if (item.parentNode) item.parentNode.removeChild(item);
                    else if (typeof item.remove === 'function') item.remove();
                }
            } catch (innerErr) {
                // ignore per-item errors
                console.error('error removing post-content_item', innerErr);
            }
        }
    } catch (e) {
        console.error('scan post-content_item error', e);
    }
}

window.addEventListener('load', (event) => {
    /* Only perform columns on story pages under /truyen/ */
    // if (window.location && window.location.href && window.location.href.indexOf('/truyen/') !== -1) {
        removeSelector('.related-manga');
        removeSelector('.sidebar-col');
        widerMainContent();
        removeRankedItems();
        removeSelector('.manga-action'); // Remove comment button
        removeSelector('#manga-discussion');
        removeSelector('#wpdUserContentInfoAnchor');
        removeSelector('#wpdUserContentInfo');
        removeSelector('#wpd-bubble-wrapper');
        removeSelector('#wpd-editor-source-code-wrapper-bg');
        removeSelector('#wpd-editor-source-code-wrapper');
        removeSelector('#wp-manga-single-js-js-extra');
        removeSelector('#wp-manga-single-js-js');
        removeSelector('#widget-logic_live_match_widget-js');
        removeSelector('#comments');
        
        removeSelector('.c-chapter-readmore');
        try {
            var chapList = document.querySelector('.listing-chapters_wrap ul.version-chap');
            if (chapList) {
                chapList.style.maxHeight = '100%';
            }
        } catch (e) {
            console.error('set listing-chapters max-height error', e);
        }

        // Update read-first / read-last buttons to point to first/last chapter links
        try {
            var chapterItems = document.querySelectorAll('.listing-chapters_wrap ul.version-chap li.wp-manga-chapter');
            if (chapterItems && chapterItems.length) {
                var firstItem = chapterItems[0];
                var lastItem = chapterItems[chapterItems.length - 1];
                var firstLink = firstItem.querySelector('a');
                var lastLink = lastItem.querySelector('a');

                var btnLast = document.querySelector('a#btn-read-last');
                if (btnLast && lastLink && lastLink.href) {
                    try { btnLast.setAttribute('href', lastLink.getAttribute('href') || lastLink.href); } catch(_) { btnLast.href = lastLink.href; }
                }

                var btnFirst = document.querySelector('a#btn-read-first');
                if (btnFirst && firstLink && firstLink.href) {
                    try { btnFirst.setAttribute('href', firstLink.getAttribute('href') || firstLink.href); } catch(_) { btnFirst.href = firstLink.href; }
                }
            }
        } catch (e) {
            console.error('set read-first/last links error', e);
        }
        //removeSelector('#init-links'); // Remove 'Doc phan dau', 'Doc phan cuoi'
        
    // }

    removeSelector('ul.main-menu-search');
    removeSelector('ul.search-main-menu');
    removeSelector('#wp-block-library-css');
    removeSelector('#wp-block-library-theme-inline-css');
    removeSelector('#classic-theme-styles-inline-css');
    removeSelector('#block-widget-css');
    removeSelector('#global-styles-inline-css');
    removeSelector('#ct-shortcode-css');
    removeSelector('#wpdiscuz-frontend-css-css');
    removeSelector('#wpdiscuz-frontend-css-inline-css');
    removeSelector('#wpdiscuz-fa-css');
    removeSelector('#wpdiscuz-combo-css-css');
    removeSelector('#wpdiscuz-combo-js-js');
    removeSelector('#wpdiscuz-combo-js-js-before');
    removeSelector('#wpdiscuz-combo-js-js-extra');
    removeSelector('#wpdiscuz_top_clearing');
    removeSelector('#wpdiscuz-loading-bar');
    removeSelector('#wpdiscuz-comment-message');
    removeSelector('#comment-reply-js');
    removeSelector('#wp-manga-login-ajax-js-extra');
    removeSelector('#wp-manga-login-ajax-js');
    removeSelector('#kdn-auto-leech-js-cron-js-extra');
    removeSelector('#kdn-auto-leech-js-cron-js');
    removeSelector('#wp-manga-js-extra');
    removeSelector('#madara-js-js-extra');
    removeSelector('.c-sub-header-nav');
    removeSelector('#a11y-speak-assertive');
    removeSelector('#a11y-speak-polite');
    removeSelector('#a11y-speak-intro-text');
    removeSelector('.ui-helper-hidden-accessible');
    removeSelector('#wp-a11y-js-translations');
    removeSelector('#wp-a11y-js');
    removeSelector('#cboxOverlay');
    removeSelector('#colorbox');
});