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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="intro.html">Introduction</a></li><li class="chapter-item affix "><li class="part-title">Installation</li><li class="chapter-item "><a href="install/install.html">Installation</a></li><li class="chapter-item "><a href="install/windows/index.html">Installing on Windows</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="install/windows/windows-10-32-bit-using-python.html">Windows 10 (32 bit) using Python and pip</a></li><li class="chapter-item "><a href="install/windows/windows-using-docker.html">Windows using Docker</a></li></ol></li><li class="chapter-item "><a href="install/android-using-termux.html">Installing on Android using Termux</a></li><li class="chapter-item "><a href="install/mecab.html">MeCab for Japanese</a></li><li class="chapter-item "><a href="install/plugins.html">Language parser plugins</a></li><li class="chapter-item "><a href="install/troubleshooting.html">Troubleshooting</a></li><li class="chapter-item "><a href="install/beta-releases.html">Beta releases</a></li><li class="chapter-item affix "><li class="part-title">Usage</li><li class="chapter-item "><a href="usage/starting-and-stopping.html">Starting and stopping</a></li><li class="chapter-item "><div>Languages</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/languages/defining-languages.html">Defining a language</a></li><li class="chapter-item "><a href="usage/languages/dictionaries.html">Dictionaries</a></li><li class="chapter-item "><a href="usage/languages/word-characters.html">Word characters</a></li></ol></li><li class="chapter-item "><div>Books</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/books/creating-books.html">Creating books</a></li><li class="chapter-item "><a href="usage/books/stats.html">The stats calculation</a></li></ol></li><li class="chapter-item "><div>Reading</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/reading/reading.html">Reading</a></li><li class="chapter-item "><a href="usage/reading/keyboard-bindings.html">Key bindings</a></li><li class="chapter-item "><a href="usage/reading/bulk-editing.html">Bulk editing</a></li><li class="chapter-item "><a href="usage/reading/copying-text.html">Copying text</a></li><li class="chapter-item "><a href="usage/reading/bookmarks.html">Bookmarks</a></li><li class="chapter-item "><a href="usage/reading-on-mobile.html">Reading on mobile</a></li><li class="chapter-item "><a href="usage/reading/overlapping-terms.html">Overlapping terms</a></li><li class="chapter-item "><a href="usage/reading/tutorial.html">The demo tutorial</a></li></ol></li><li class="chapter-item "><div>Terms</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/terms/terms.html">Terms</a></li><li class="chapter-item "><a href="usage/terms/parent-terms.html">Parent terms</a></li><li class="chapter-item "><a href="usage/terms/bulk-editing.html">Bulk editing</a></li><li class="chapter-item "><a href="usage/terms/edit-using-term-listing.html">Editing in the Term list</a></li><li class="chapter-item "><a href="usage/terms/link-parent-child-statuses.html">Linking parent-child statuses</a></li><li class="chapter-item "><a href="usage/terms/bulk-term-import.html">Bulk term import</a></li></ol></li><li class="chapter-item "><div>Anki exports (still in development!)</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/ankiexport/index.html">Overview</a></li><li class="chapter-item "><a href="usage/ankiexport/getting-started.html">Getting started</a></li><li class="chapter-item "><a href="usage/ankiexport/anki-and-anki-connect.html">Anki and AnkiConnect</a></li><li class="chapter-item "><a href="usage/ankiexport/defining-exports.html">Defining exports</a></li><li class="chapter-item "><a href="usage/ankiexport/exporting-terms.html">Exporting terms</a></li></ol></li><li class="chapter-item "><div>Themes</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="usage/themes/themes.html">Themes</a></li><li class="chapter-item "><a href="usage/themes/toggling-highlights.html">Toggling highlights</a></li><li class="chapter-item "><a href="usage/themes/custom-styles.html">Custom styles</a></li></ol></li><li class="chapter-item "><a href="usage/audio.html">Adding audio</a></li><li class="chapter-item "><a href="backup/backup.html">Backup</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="backup/restore.html">Restoring backups</a></li></ol></li><li class="chapter-item "><a href="usage/command-line-jobs.html">Command line jobs</a></li><li class="chapter-item "><a href="usage/updating.html">Updating Lute</a></li><li class="chapter-item affix "><li class="part-title">Misc</li><li class="chapter-item "><a href="misc/faqs.html">Frequently asked questions (FAQs)</a></li><li class="chapter-item "><a href="background.html">Background</a></li><li class="chapter-item "><a href="misc/changelog.html">Changelog</a></li><li class="chapter-item "><a href="misc/backlog.html">Backlog</a></li><li class="chapter-item "><a href="misc/doc-feedback.html">Documentation feedback</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
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
