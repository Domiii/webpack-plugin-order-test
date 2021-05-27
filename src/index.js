function f() {
  return A.B.C;
}

console.log(`${__filename}:`, f.toString().includes('good!') ? 'good' : 'bad');

process.exit();