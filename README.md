# Cotizador de Préstamos

Aplicación web para simular un préstamo: el usuario elige un monto y un plazo, y la app calcula al instante el total a pagar y la cuota mensual. Es una app de una sola página (SPA) hecha con React.

**Demo en línea:** https://prestamos-react-developer-ortega.netlify.app

Proyecto realizado como parte de un curso de React con JavaScript (Udemy), desplegado por mi cuenta como parte de mi portafolio.

## Funcionalidades

- Selección del monto con una barra deslizable o con los botones `+` y `-` (de $0 a $20,000, en pasos de $100)
- Validación de límites mínimo y máximo con aviso al usuario
- Selección de plazo: 6, 12 o 24 meses
- Cálculo automático del total a pagar y del pago mensual
- Formato de moneda con la API nativa `Intl.NumberFormat`
- Diseño responsivo

## Cómo se calcula

- **Por monto:** mientras mayor el monto solicitado, menor el interés (de 1.5x en montos bajos a 1.2x en montos altos).
- **Por plazo:** mientras más largo el plazo, mayor el recargo (x1.1 a 6 meses, x1.2 a 12 meses y x1.3 a 24 meses).
- **Pago mensual:** total a pagar dividido por el número de meses.

Las tasas son ilustrativas, definidas con fines didácticos.

## Conceptos de React que practica

- Componentes reutilizables (`Header`, `Button`) y paso de props
- Estado con `useState`
- Efectos secundarios con `useEffect` (recalcular al cambiar monto o plazo)
- Manejo de eventos y formularios controlados
- Separación de la lógica en funciones auxiliares (`helpers`)

## Stack técnico

- **React 19** + **JavaScript**
- **Vite** como bundler y servidor de desarrollo
- **Tailwind CSS 4** para los estilos
- **Netlify** para el despliegue (conectado a este repositorio)

## Estructura del proyecto

```
src/
├── components/   # Header y Button
├── helpers/      # Formato de moneda y cálculo del préstamo
├── App.jsx       # Componente principal y estado
├── main.jsx      # Punto de entrada
└── index.css     # Importa Tailwind
```

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/developer-ortega/cotizador-prestamos-react.git
   cd cotizador-prestamos-react
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Genera el build de producción en /dist
npm run preview   # Sirve el build localmente
npm run lint      # Ejecuta ESLint
```
