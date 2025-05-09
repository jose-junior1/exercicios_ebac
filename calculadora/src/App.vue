<script setup>
import { reactive, computed } from 'vue';

const estado = reactive({
  numeroA: 0,
  numeroB: 0,
  operacao: 'soma',
});

const resultado = computed(() => {
  const a = parseFloat(estado.numeroA);
  const b = parseFloat(estado.numeroB);

  switch (estado.operacao) {
    case 'soma':
      return a + b;
    case 'subt':
      return a - b;
    case 'multi':
      return a * b;
    case 'dvs':
      return b !== 0 ? a / b : 'Divisão por zero!';
    default:
      return 0;
  }
});
</script>

<template>
  <h1>Calculadora Simples</h1>
  <div class="container">
    <input type="number" v-model="estado.numeroA" />
    <span class="operador">
      {{
        estado.operacao === 'soma' ? '+' :
        estado.operacao === 'subt' ? '-' :
        estado.operacao === 'multi' ? '×' :
        estado.operacao === 'dvs' ? '÷' : ''
      }}
    </span>
    <input type="number" v-model="estado.numeroB" />
    <select v-model="estado.operacao">
      <option value="soma">Somar</option>
      <option value="subt">Subtrair</option>
      <option value="multi">Multiplicar</option>
      <option value="dvs">Dividir</option>
    </select>
  </div>
  <p class="resultado">Resultado: {{ resultado }}</p>
</template>

<style scoped>
h1, .container, .resultado {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

h1 {
  margin-bottom: 50px;
}

.container {
  display: flex;
  align-items: center;
}

input {
  width: 100px;
  height: 30px;
  margin-right: 10px;
  text-align: center;
  border: 3px solid;
  font-size: 24px;
}

.operador {
  margin-right: 10px;
  font-size: 24px;
  font-size: 28px;
  font-weight: bold;
}

select {
  text-transform: uppercase;
  height: 35px;
  width: 150px;
  font-weight: bold;
  font-size: 18px;
  border: 3px solid rgb(160, 0, 0); 
  text-align: center;
}

.resultado {
  margin-top: 40px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 28px;
}
</style>
