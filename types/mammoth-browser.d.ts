// types/turndown.d.ts

declare module "turndown" {
  export default class TurndownService {
    constructor(options?: unknown);
    addRule(key: string, rule: unknown): void;
    keep(filter: unknown): void;
    remove(filter: unknown): void;
    use(plugin: unknown): void;
    turndown(input: string): string;
  }
}
