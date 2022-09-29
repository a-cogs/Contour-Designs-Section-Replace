const ready2 = (elem, callback) => {
    let check = 0;
    let loaded = setInterval(() => {
        check++
        if ( document.querySelectorAll(elem).length ) {
            clearInterval(loaded);
            callback();
        } else if ( check > 50 ) {
            clearInterval(loaded);
        }
    }, 100);
}

const sections = [
    {
        hook: 'img[srcset*="RM-Red-icons-01"]',
        content: `<div class="da-section" id="da-props">
                    <div class="da-img">
                        <img src="https://static.disruptive.co/contour-designs/people-imagery/group.png" alt="Group of happy people at a computer">
                    </div>
                    <div class="da-props">
                        <div class="da-prop">
                            <div class="da-img">
                                <img src="https://www.contourdesign.com/wp-content/uploads/2021/02/RM-Red-icons-01-2-e1601326938663-1-1-1.png" alt="ambidextrous icon">
                            </div>
                            <div class="da-prop-txt">
                                <h3>Ambidextrous Use</h3>
                                <p>RollerMouse is easily used with both hands, reducing repetitive motion.</p>
                            </div>
                        </div>
                        <div class="da-prop">
                            <div class="da-img">
                                <img src="https://www.contourdesign.com/wp-content/uploads/2021/02/RM-Red-icons-02-2-e1601326910475-1-1-1.png" alt="target icon">
                            </div>
                            <div class="da-prop-txt">
                                <h3>Centralized Pointing</h3>
                                <p>RollerMouse gives users control while reducing the risk of repetitive stress injuries.</p>
                            </div>
                        </div>
                        <div class="da-prop">
                            <div class="da-img">
                                <img src="https://www.contourdesign.com/wp-content/uploads/2021/02/RM-Red-icons-03-2-e1601326852187-1-1-1.png" alt="pain icon">
                            </div>
                            <div class="da-prop-txt">
                                <h3>Eliminate Reaching</h3>
                                <p>RollerMouse eliminates reaching, keeping users in a comfortable, neutral posture.</p>
                            </div>
                        </div>
                    </div>
                </div>`
    },
    {
        hook: 'img[srcset*="pain-icon"]',
        content: `<div class="da-section" id="da-pain">
                    <div class="da-img">
                        <img src="https://static.disruptive.co/contour-designs/people-imagery/pain.png" alt="person having wrist pain">
                    </div>
                    <div class="da-props">
                        <h4>We recommend using ${item.Title} to help with these repetitive strain injuries:</h4>
                        <div class="da-checks">
                            <p><i class="fal fa-check"></i> CARPAL TUNNEL SYNDROME</p>
                            <p><i class="fal fa-check"></i> DE QUERVAIN’S TENOSYNOVITIS</p>
                            <p><i class="fal fa-check"></i> MOUSE SHOULDER</p>
                            <p><i class="fal fa-check"></i> TENNIS ELBOW</p>
                            <p><i class="fal fa-check"></i> TRIGGER FINGER</p>
                            <p><i class="fal fa-check"></i> ULNAR NERVE ENTRAPMENT</p>
                        </div>
                    </div>
                </div>`
    }
]

// Use the "hook" to find the section, then replace it with the "content"
sections.forEach(function(section, i){
    ready2(section.hook, () => {
        const $ = jQuery;
        const list = document.querySelectorAll(section.hook);

        // Remove Duplicate Sections
        if ( list.length > 1 ) {
            list.forEach((e, i) => {
                if ( i < 1 ) return;
                e.closest('section').style.display = 'none';
            });
        }

        // Rewrite Section
        const root = document.querySelector(section.hook);
        root.closest('section > .elementor-container').innerHTML = section.content;
    });
});

// REMOVE DUPLICATE COMPARE SECTIONS
ready2('section.da-find', () => {
    const list = document.querySelectorAll('section.da-find');

    if ( list.length < 2 ) return;
    list.forEach((e, i) => {
        if ( i < 1 ) return;
        e.style.display = 'none';
    });
});