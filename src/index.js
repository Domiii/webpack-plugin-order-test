function f() {
  return [process.env.NODE_ENV, A.B.C];
}

console.log(`${__filename}:`, f.toString().includes('good!') ? 'good' : 'bad');

process.exit();
