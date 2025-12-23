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
            ".l-header__nav__item.active"
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
            ".l-header__nav__item.active"
        ) as HTMLElement | null;

        if (activeItem) {
            moveMarker(activeItem);
        }
    };

    return (
        <header className="l-header">
            <div className="l-header__inner">
                <h1 className="l-header__logo">
                    <Image src="/img/tklogo.svg" alt="logo" width={27} height={35} />
                    <span className="l-header__logo__name">TATSUYA KAMIMAE .</span>
                    <span className="l-header__logo__site">- portfolio site</span>
                </h1>

                <nav className="l-header__nav">
                    <ul className="l-header__nav__list" ref={listRef}>
                        <span className="l-header__nav__marker" ref={markerRef} />

                        <li
                            className={`l-header__nav__item ${pathname === "/" ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/">PROFILE</a>
                        </li>

                        <li
                            className={`l-header__nav__item ${pathname.startsWith("/works") ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/works">WORKS</a>
                        </li>

                        <li
                            className={`l-header__nav__item ${pathname === "/service" ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/service">SERVICE</a>
                        </li>

                        <li
                            className={`l-header__nav__item ${pathname.startsWith("/blog") ? "active" : ""}`}
                            onMouseEnter={(e) => moveMarker(e.currentTarget)}
                            onMouseLeave={resetMarker}
                        >
                            <a href="/blog">BLOG</a>
                        </li>
                    </ul>
                </nav>

                <div className="l-header__btn">
                    <a href="/contact">CONTACT</a>
                </div>
            </div>
        </header>
    );
}
