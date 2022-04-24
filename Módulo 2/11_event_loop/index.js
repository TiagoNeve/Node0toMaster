function a() {
  console.log("Executando a()");
}

function b() {
  console.log("Executando b()");
}

function c() {
  console.log("Executando c()");
  a()
  b()
}

c()
a()
b()

// Parece mais que ele compila e executa o código de maneira estruturada ou então no estilo de POO