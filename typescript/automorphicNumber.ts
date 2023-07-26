export function automorphic(n: number): string {
    // your code here
    return Math.pow(n,2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!" 
  }
  