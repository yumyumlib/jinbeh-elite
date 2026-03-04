import React from "react";

interface ContextualLink {
    text: string;
    href: string;
    context?: string; // Optional context description
}

export const contextualLinkMap: Record<string, ContextualLink[]> = {
    "/blog/what-is-hibachi": [
        {
            text: "hibachi chefs in Frisco",
            href: "/frisco/hibachi",
        },
        {
            text: "birthday celebration",
            href: "/celebrations/birthday",
        },
        {
            text: "premium sake selection",
            href: "/frisco/cocktails",
        },
        {
            text: "fresh sushi",
            href: "/frisco/sushi-rolls",
        },
        {
            text: "private dining room",
            href: "/private-dining",
        },
    ],
    "/frisco/hibachi": [
        {
            text: "what hibachi really is",
            href: "/blog/what-is-hibachi",
        },
        {
            text: "celebrate a birthday",
            href: "/celebrations/birthday",
        },
        {
            text: "sake pairing",
            href: "/frisco/cocktails",
        },
    ],
    "/celebrations/birthday": [
        {
            text: "hibachi entertainment",
            href: "/frisco/hibachi",
        },
        {
            text: "plan the perfect birthday",
            href: "/blog/birthday-party-planning",
        },
        {
            text: "group reservations",
            href: "/reservations",
        },
    ],
    "/blog/best-hibachi-dallas": [
        {
            text: "birthday celebrations",
            href: "/celebrations/birthday",
        },
        {
            text: "date nights",
            href: "/blog/date-night-restaurants-frisco",
        },
    ],
    "/blog/best-sushi-frisco": [
        {
            text: "sushi menu",
            href: "/frisco/sushi-rolls",
        },
    ],
    "/blog/hibachi-birthday-party-ideas": [
        {
            text: "birthday celebrations",
            href: "/celebrations/birthday",
        },
        {
            text: "large group dining",
            href: "/blog/large-group-dining",
        },
    ],
};

// Helper function to inject contextual links into content
export function injectContextualLinks(content: string, routePath: string): string {
    const links = contextualLinkMap[routePath] || [];
    let enhancedContent = content;

    links.forEach((link) => {
        // Use a case-insensitive regex to find the text but replace with the exact match from the content
        // To avoid replacing inside existing HTML tags (like <a> tags), we can use a more advanced regex
        // or just rely on the existing text not containing complex HTML in the target areas.
        // For simplicity, we assume the target text is plain text inside paragraphs.
        const regex = new RegExp(`(?<!<[^>]*)\\b(${escapeRegExp(link.text)})\\b(?![^<]*>)`, "gi");

        enhancedContent = enhancedContent.replace(regex, (match) => {
            return `<a href="${link.href}" class="text-deep-indigo hover:text-soft-gold underline font-medium transition-colors cursor-pointer">${match}</a>`;
        });
    });

    return enhancedContent;
}

// Utility to escape string for regex
function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
