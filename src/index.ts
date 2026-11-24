/**
 * 项目入口（占位）。
 * 目前只用于验证工具链（dev / build / typecheck / test）可用，
 * 有真实需求后替换掉即可。
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

const who = process.argv[2] ?? "world";
console.log(greet(who));
