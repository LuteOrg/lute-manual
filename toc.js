// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="intro.html">Introduction</a></li><li class="chapter-item "><a href="background.html">Background</a></li><li class="chapter-item affix "><li class="part-title">Installation</li><li class="chapter-item "><a href="install/install.html">Installation</a></li><li class="chapter-item "><a href="install/windows/index.html">Installing on Windows</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="install/windows/windows-10-32-bit-using-python.html">Windows 10 (32 bit) using Python and pip</a></li><li class="chapter-item "><a href="install/windows/windows-using-docker.html">Windows using Docker</a></li></ol></li><li class="chapter-item "><a href="install/android-using-termux.html">Installing on Android using Termux</a></li><li class="chapter-item "><a href="install/mecab.html">MeCab for Japanese</a></li><li class="chapter-item "><a href="install/plugins.html">Language parser plugins</a></li><li class="chapter-item "><a href="install/troubleshooting.html">Troubleshooting</a></li><li class="chapter-item "><a href="install/beta-releases.html">Beta releases</a></li><li class="chapter-item affix "><li class="part-title">Usage</li><li class="chapter-item "><a href="usage/starting-and-stopping.html">Starting and stopping</a></li><li class="chapter-item "><div>Languages</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/languages/defining-languages.html">Defining a language</a></li><li class="chapter-item "><a href="usage/languages/dictionaries.html">Dictionaries</a></li><li class="chapter-item "><a href="usage/languages/word-characters.html">Word characters</a></li></ol></li><li class="chapter-item "><div>Books</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/books/creating-books.html">Creating books</a></li><li class="chapter-item "><a href="usage/books/stats.html">The stats calculation</a></li></ol></li><li class="chapter-item "><div>Reading</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/reading/reading.html">Reading</a></li><li class="chapter-item "><a href="usage/reading/keyboard-bindings.html">Key bindings</a></li><li class="chapter-item "><a href="usage/reading/bulk-editing.html">Bulk editing</a></li><li class="chapter-item "><a href="usage/reading/copying-text.html">Copying text</a></li><li class="chapter-item "><a href="usage/reading/bookmarks.html">Bookmarks</a></li><li class="chapter-item "><a href="usage/reading-on-mobile.html">Reading on mobile</a></li><li class="chapter-item "><a href="usage/reading/overlapping-terms.html">Overlapping terms</a></li><li class="chapter-item "><a href="usage/reading/tutorial.html">The demo tutorial</a></li></ol></li><li class="chapter-item "><div>Terms</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/terms/terms.html">Terms</a></li><li class="chapter-item "><a href="usage/terms/parent-terms.html">Parent terms</a></li><li class="chapter-item "><a href="usage/terms/bulk-editing.html">Bulk editing</a></li><li class="chapter-item "><a href="usage/terms/link-parent-child-statuses.html">Linking parent-child statuses</a></li><li class="chapter-item "><a href="usage/terms/bulk-term-import.html">Bulk term import</a></li></ol></li><li class="chapter-item "><div>Themes</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/themes/themes.html">Themes</a></li><li class="chapter-item "><a href="usage/themes/toggling-highlights.html">Toggling highlights</a></li><li class="chapter-item "><a href="usage/themes/custom-styles.html">Custom styles</a></li></ol></li><li class="chapter-item "><a href="usage/audio.html">Adding audio</a></li><li class="chapter-item "><a href="backup/backup.html">Backup</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="backup/restore.html">Restoring backups</a></li></ol></li><li class="chapter-item "><a href="usage/command-line-jobs.html">Command line jobs</a></li><li class="chapter-item "><a href="usage/updating.html">Updating Lute</a></li><li class="chapter-item affix "><li class="part-title">FAQs</li><li class="chapter-item "><a href="faq/help.html">Where can I get help?</a></li><li class="chapter-item "><div>Setup</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faq/setup/web-server.html">Can I run Lute on a private web server?</a></li><li class="chapter-item "><a href="faq/setup/mobile-support.html">Can I run Lute on my phone or pad?</a></li><li class="chapter-item "><a href="faq/setup/usb.html">Can I store Lute data on a USB key?</a></li><li class="chapter-item "><a href="faq/setup/adding-basic-auth.html">Can I make Lute secure?</a></li><li class="chapter-item "><a href="faq/setup/online-lute.html">Is there an online version of Lute?</a></li><li class="chapter-item "><a href="faq/setup/v2-to-v3.html">How can I migrate from Lute v2 to v3?</a></li></ol></li><li class="chapter-item "><div>Languages</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faq/language/add-a-language.html">Can you add language X?</a></li></ol></li><li class="chapter-item "><div>Books</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faq/books/finding-stuff.html">Where can I find books to import?</a></li><li class="chapter-item "><a href="faq/books/epub-import.html">Why won&#39;t my epub import correctly?</a></li><li class="chapter-item "><a href="faq/books/pdf-import.html">Why won&#39;t my pdf import correctly?</a></li><li class="chapter-item "><a href="faq/books/utf-8.html">My text file import is giving a "utf-8 encoding" error message</a></li></ol></li><li class="chapter-item "><div>Reading</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faq/reading/click-not-working.html">I can&#39;t click on words in the reading screen</a></li></ol></li><li class="chapter-item "><div>Terms</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faq/terms/terms-cannot-be-changed-once-created.html">Why can&#39;t I change a Term?</a></li><li class="chapter-item "><a href="faq/terms/sentences-only-shown-when-page-is-read.html">Where are my new Term&#39;s sentences?</a></li><li class="chapter-item "><a href="faq/terms/term-statuses.html">How should I use statuses?</a></li></ol></li><li class="chapter-item "><a href="faq/import-from-other-systems.html">Can I import data from other systems?</a></li><li class="chapter-item "><a href="faq/why-no-flashcards.html">Why doesn&#39;t Lute have flashcards, or an SRS?</a></li><li class="chapter-item "><a href="faq/prioritizing-dev-work.html">How is development work prioritized?</a></li><li class="chapter-item "><a href="faq/free.html">Why is this free?</a></li><li class="chapter-item affix "><li class="part-title">Misc</li><li class="chapter-item "><a href="misc/changelog.html">Changelog</a></li><li class="chapter-item "><a href="misc/backlog.html">Backlog</a></li><li class="chapter-item "><a href="misc/doc-feedback.html">Documentation feedback</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
