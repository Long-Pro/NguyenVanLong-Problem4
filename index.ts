function sum_to_n_a(n: number): number {
  // algorithm complexity: O(1)
	return (1+n)*n/2
}

function sum_to_n_b(n: number): number {
  // algorithm complexity: O(n)
	let result=1
  for(let i=2;i<=n;i++) result+=i
  return result
}

function sum_to_n_c(n: number): number {
  // algorithm complexity: O(n)
  let result = 0;
  while (n) {
    result += n--;
  }
  return result;
}