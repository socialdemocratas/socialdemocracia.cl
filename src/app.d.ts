// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

/// <reference types="@sveltejs/adapter-cloudflare" />

declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
	interface Platform {
	    env?: {
	        //COUNTER: DurableObjectNamespace;
			ARTICLES: { binding: "ARTICLES", id: "6b873574420e41d685161ef9f53c045e" }
	    };
	    context: {
	        waitUntil(promise: Promise<any>): void;
	    };
	    caches: CacheStorage & { default: Cache }
	}
		
		
}
