import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './portfolio.module.css';

type SkillItem = {
    title: string;
    icon: string;
    description: string;
};

const SkillList: SkillItem[] = [
    {
        title: 'Frontend',
        icon: '🖌️',
        description: 'Experience using Flutter, as well as some Qt & QML. I enjoy using software that looks good and feels smooth. I think everything should have an A+ user experience regardless of the intended user. Good UX is usually more important than good UI.'
    },
    {
        title: 'Backend',
        icon: '🔧',
        description: 'I like clean code, organization, and good documentation. Readable is better than terse. I always ask: if an outsider were to read this portion of code, would it make sense or be a headache to figure out?'
    },
    {
        title: 'Mobile',
        icon: '📱',
        description: 'Experience making apps for Android & iOS using Flutter. Adaptive design so the UI / UX work for mobile, tablet and desktop.'
    },
    {
        title: 'Desktop',
        icon: '🖥️',
        description: 'Experience making apps for Linux, Windows, MacOS and web. Adaptive design so the UI / UX work for mobile, tablet and desktop. Varying levels of experience with Dart / Flutter, C++, Qt / QML, Python, Go and C#.'
    },
    {
        title: 'CI / CD',
        icon: '🚀',
        description: `Automate all the things! Test, build, release. Experience with GitHub, GitLab, Docker, Bash, Powershell, Perl, etc. Comprehensive automation is a beautiful thing.`,
    },
    {
        title: 'Learning',
        icon: '📚',
        description: `I am intelligent, curious, thoughtful and persistent. I have taught myself everything I know about computers and software development. I continue to learn new things as they become needful: Simplify installation for the end-user? Lets dive into bash. Working with someone's Perl build scripts? Lets figure out some Perl and improve them. Need appealing documentation? Learn Markdown.`
    },
];

function Skill({ title, icon, description }: SkillItem) {
    return (
        <div className={clsx(styles.gridItem)}>
            <h2>{icon}</h2>
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </div>
    );
}

function Projects() {
    return (
        <div className={styles.projects}>
            <h1 style={{ textAlign: 'center' }}>Projects</h1>
            <p>
                In addition to my work on <a href="https://invent.kde.org/merritt" target="_blank">KDE</a> and
                miscellaneous <a href="https://github.com/Merrit" target="_blank">open source contributions</a>, these are
                some of my personal projects:
            </p>

            <br />

            <h2>Nyrna</h2>
            <p>Suspend games and applications.</p>
            <img src="https://nyrna.merritt.codes/assets/images/promo-e8afdfd466844e711c6d2117efa5c5c4.jpg" alt="Promo" />
            <p>
                Nyrna is a cross-platform desktop application written with Flutter that allows
                one to suspend and resume applications.
            </p>
            <p>
                The design has intentionally been kept simple and minimalist as this software is
                expected to be used by anyone, including those who are not 'tech-savvy'.
            </p>
            <p>
                Working with Flutter to create Nyrna has been excellent, as even while
                considered an alpha level feature the desktop software creation experience has
                been quite exceptional.
            </p>
            <p>
                On Linux the project is quite straight forward, making use of regular system
                calls to get process information, suspend, and resume.
            </p>
            <p>
                Windows on the other hand required a great deal more attention, as I have found
                throughout the project that the win32 API does not provide a meaningful
                interface with which to check the status of a process, nor to send a signal
                like one familiar with Linux might expect.
            </p>
            <p>
                I ended up writing several direct wrappers
                using <code>dart:ffi</code> - the dart Foreign Function Interface that facilitates C
                interop, in order to make calls to the win32 API directly from native Dart code, as well
                as <a href="https://pub.dev/packages/win32_suspend_process">creating a small library</a> specifically
                to handle the calls to <code>ntdll.dll</code> in order to use the
                undocumented <code>NtSuspendProcess()</code> and <code>NtResumeProcess()</code> functions.
            </p>
            <p>
                While not easy or straightforward, the challenge presented here was quite
                interesting and rewarding - and I enjoyed learning more about systems level
                programming and APIs.
            </p>
            <h3>Languages</h3>
            <ul>
                <li>Flutter / Dart</li>
                <li>Small amount of C++ via the C interop library <code>dart:fii</code></li>
            </ul>
            <h3>Platforms</h3>
            <ul>
                <li>Linux</li>
                <li>Windows</li>
            </ul>
            <h3>Packaging</h3>
            <ul>
                <li>Linux:
                    <ul>
                        <li>AppImage</li>
                        <li>Portable</li>
                        <li>Snap</li>
                    </ul>
                </li>
                <li>Windows:
                    <ul>
                        <li>Installer exe</li>
                        <li>Portable</li>
                        <li>winget</li>
                    </ul>
                </li>
            </ul>
            <a className="button button--primary" href="https://nyrna.merritt.codes/" target="_blank">Website</a>
            <p />
            <a href="https://github.com/Merrit/nyrna" target="_blank">
                <img src="https://img.shields.io/github/stars/merrit/nyrna?style=social&label=GitHub" alt="GitHub" />
            </a>

            <div className={styles.divider} />

            <h2>Unit Bargain Hunter</h2>
            <p>A quick and simple way to verify which is the best value when comparing what to shop for.</p>
            <img src="https://raw.githubusercontent.com/Merrit/unit_bargain_hunter/main/assets/images/promo/promo.png" alt="Showcase" />
            <p>
                Unit Bargain Hunter is a multi-platform application that allows the
                user to compare multiple items when shopping by item count, volume, or weight
                along with the price of each item in order to easily find which is the best
                value and by how much.
            </p>
            <p>
                Unit Bargain Hunter is a relatively straight-forward app with a light / dark
                theme toggle and using <code>bloc</code> for state management.
            </p>
            <h3>Languages</h3>
            <ul>
                <li>Flutter & Dart</li>
            </ul>
            <h3>Platforms</h3>
            <ul>
                <li>Windows</li>
                <li>Linux</li>
                <li>Web</li>
                <li>Android</li>
            </ul>
            <p>iOS and macOS should work as well given a Mac to compile on & a developer account to distribute them.</p>
            <h3>Packaging</h3>
            <ul>
                <li>Linux:
                    <ul>
                        <li>AppImage</li>
                        <li>Portable</li>
                    </ul>
                </li>
                <li>Windows:
                    <ul>
                        <li>Installer exe</li>
                        <li>Portable</li>
                        <li>winget</li>
                    </ul>
                </li>
                <li>Android:
                    <ul>
                        <li>Google Play store</li>
                        <li>APK</li>
                    </ul>
                </li>
            </ul>
            <a className="button button--primary" href="/bargain/">Website</a>
            <p />
            <a href="https://github.com/Merrit/unit_bargain_hunter" target="_blank">
                <img src="https://img.shields.io/github/stars/merrit/unit_bargain_hunter?style=social&label=GitHub" alt="GitHub" />
            </a>

            <div className={styles.divider} />

            <h2>KRunner API</h2>
            <p>A user-friendly API for KDE’s KRunner application.</p>
            <img src="https://github.com/Merrit/krunner-dart/blob/8dee34a008fae6883d3e2822af92c4afa33b30da/assets/images/promo/promo.png?raw=true" alt="Showcase" />
            <p>
                Improves on the standard KRunner API by offering a user-friendly language (Dart)
                along with type safety, null safety, named parameters, and extensive
                documentation and examples.
            </p>
            <h3>Languages</h3>
            <ul>
                <li>Dart</li>
            </ul>
            <a className="button button--primary" href="https://pub.dev/packages/krunner" target="_blank">Website</a>
            <p />
            <a href="https://github.com/Merrit/krunner-dart" target="_blank">
                <img src="https://img.shields.io/github/stars/merrit/krunner-dart?style=social&label=GitHub" alt="GitHub" />
            </a>
        </div>
    );
}

export default function Portfolio(): JSX.Element {
    return (
        <Layout title="Portfolio" description="Portfolio page">
            <div className="text--center">
                <section className={clsx(styles.container, 'container')}>
                    {/* <p style={{ fontSize: '2.5em' }}>
                        <a href='projects/'><u>Projects Page</u></a>
                    </p> */}
                    <br />
                    <br />
                    <h1>Skills</h1>
                    <br />
                    <div className={styles.gridContainer}>
                        {SkillList.map((props, idx) => (
                            <Skill key={idx} {...props} />
                        ))}
                    </div>
                    <br />
                    <p style={{ fontSize: '1.3em' }}>
                        I am a <em>big</em> fan of <strong>Dart</strong> & <strong>Flutter</strong>! 💙
                    </p>
                    <br />
                    <br />
                    <Projects />
                </section>
            </div>
        </Layout>
    );
}
