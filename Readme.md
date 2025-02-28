![alt text](image.png)

# Proyecto: Ejercicios Básicos en JavaScript con Pruebas Unitarias

Este repositorio contiene dos ejercicios básicos en JavaScript junto con sus respectivas pruebas unitarias utilizando Jest. Los ejercicios están diseñados para practicar conceptos fundamentales de programación y testing.

## Requisitos

- Node.js (versión recomendada: 16.x o superior)
- npm (viene con Node.js)

## Instalación

1. Clona este repositorio o descarga los archivos en tu máquina local:
   ```bash
   git clone https://github.com/rricozdev/test.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd test
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Estructura del Proyecto

```
proyecto/
├── src/
│   ├── isEven.js         # Función para verificar si un número es par
│   └── sum.js            # Función para sumar dos números
├── test/
│   ├── isEven.test.js    # Pruebas unitarias para la función isEven
│   └── sum.test.js       # Pruebas unitarias para la función sum
├── node_modules/         # Carpeta de dependencias de npm
├── .gitignore            # Archivo para ignorar archivos en git
├── package-lock.json     # Archivo de bloqueo de dependencias de npm
├── package.json          # Configuración del proyecto y dependencias
└── README.md             # Este archivo
```

## Ejercicios

### Ejercicio 1: Sumar dos números
- **Archivo**: `src/sum.js`
- **Descripción**: Implementa una función llamada `sum` que reciba dos parámetros numéricos (`a` y `b`) y devuelva su suma. Debe manejar números positivos, negativos y cero.
- **Pruebas**: Verifica la suma de números positivos, mezcla de positivos y negativos, y números negativos. Las pruebas están en `test/sum.test.js`.

### Ejercicio 2: Verificar si un número es par
- **Archivo**: `src/isEven.js`
- **Descripción**: Implementa una función llamada `isEven` que reciba un número (`number`) y devuelva `true` si es par o `false` si es impar. Considera que cero es un número par.
- **Pruebas**: Verifica un número par positivo, un número impar y el caso especial de cero. Las pruebas están en `test/isEven.test.js`.

## Ejecución de las Pruebas

Para ejecutar las pruebas unitarias con Jest:

1. Asegúrate de que las dependencias estén instaladas (`npm install`).
2. Ejecuta el siguiente comando en la terminal:
   ```bash
   npm test
   ```
   Esto correrá todas las pruebas definidas en los archivos dentro de la carpeta `test/`.

## Configuración de Jest

Jest está configurado automáticamente al instalarlo como dependencia. El script `"test": "jest"` en `package.json` permite ejecutar las pruebas con el comando `npm test`. Asegúrate de que los archivos de prueba dentro de `test/` sigan la convención de nombres `*.test.js` para que Jest los detecte.

## Contribuir

Si deseas contribuir con más ejercicios o mejorar los existentes:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz commit (`git commit -m "Agrego nueva función"`).
4. Sube tus cambios (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

