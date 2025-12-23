"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    const markerRef = useRef<HTMLSpanElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const activeItem = listRef.current?.querySelector(
            ".l-footer__nav__item.active"
        ) as HTMLElement | null;

        if (activeItem && markerRef.current) {
            moveMarker(activeItem);
        }
    }, [pathname]);

    const moveMarker = (target: HTMLElement) => {
        if (!markerRef.current || !listRef.current) return;

        const listRect = listRef.current.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        markerRef.current.style.width = `${targetRect.width}px`;
        markerRef.current.style.transform = `translateX(${targetRect.left - listRect.left}px)`;
    };

    const resetMarker = () => {
        const activeItem = listRef.current?.querySelector(
            ".l-footer__nav__item.active"
        ) as HTMLElement | null;

        if (activeItem) {
            moveMarker(activeItem);
        }
    };

    return (
        <footer className="l-footer">
            <div className="l-footer__inner">

                <nav className="l-footer__nav">
                    <ul className="l-footer__nav__list" ref={listRef}>
                        <span className="l-footer__nav__marker" ref={markerRef} />

                        <li
                            className={`l-footer__nav__item ${pathname === "/" ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/">PROFILE</a>
                        </li>

                        <li
                            className={`l-footer__nav__item ${pathname.startsWith("/works") ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/works">WORKS</a>
                        </li>

                        <li
                            className={`l-footer__nav__item ${pathname === "/service" ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/service">SERVICE</a>
                        </li>

                        <li
                            className={`l-footer__nav__item ${pathname.startsWith("/blog") ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/blog">BLOG</a>
                        </li>
                    </ul>
                </nav>

                <small className="l-footer__small">
                    © 2025 TATSUYA KAMIMAE. All rights reserved.
                </small>

                <div className="l-footer__sns">

                    <a href="https://github.com/tatsuya-k-developer" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/github-mark.svg" alt="github" width={20} height={20} />
                    </a>
                    <a href="https://www.instagram.com/i_am_tatsuya._/" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/insta.svg" alt="instagram" width={20} height={20} />
                    </a>
                    <a href="https://works.do/R/ti/p/t.kamimae@aegis-inc" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/lineworks.svg" alt="LineWorks" width={103} height={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
