"use client";

import { Button } from "@/components/ui/button";
import { scrollToBottom } from "@/lib/utils";

export default function DownloadScroll() {
    return (
        <Button
            className="text-md text-foreground"
            onClick={scrollToBottom}
            variant="link"
        >
            Looking for a different platform?
        </Button>
    );
}
