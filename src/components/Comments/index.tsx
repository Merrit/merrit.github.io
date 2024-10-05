import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

/// This component is used to add comments to the bottom of blog posts and docs.
///
/// It uses the Giscus GitHub discussions integration.
/// See: https://rikublock.dev/docs/tutorials/giscus-integration/
export default function Comments(): JSX.Element {
    const { colorMode } = useColorMode();

    return (
        <div>
            <div style={{ height: 20 }} />
            <Giscus
                id="comments"
                repo="Merrit/merrit.github.io"
                repoId="MDEwOlJlcG9zaXRvcnkzNDMyMDAwMzQ="
                category="Announcements"
                categoryId="DIC_kwDOFHTRIs4CjGV0"
                mapping="pathname"
                strict="1"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
