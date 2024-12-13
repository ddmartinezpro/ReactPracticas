import CounterApp from "../components/CounterApp";
import {render, screen, fireEvent} from "@testing-library/react";

describe('Pruebas en CounterApp', () => {
    test('Debe coincidir con el snap y tener por default el contador en 10', () => {
        const { container } = render(<CounterApp />);

        expect(container).toMatchSnapshot();

        // El uso de 'heading' representa las etiquetas 'h', el 'level 2' seria el 'h2'
        const counterNumber = screen.getByRole('heading', { level: 2 });
        expect(counterNumber.textContent).toBe('10')
    });

    test('Si se manda 3 y se aumenta en 1 se debe mostrar 4', () => {
        const { container } = render(<CounterApp value={3}/>);

        // Se simula un click en el boton de incrementar el contador que se referencia mediante su texto
        const targetButton = screen.getByText('Incrementar');
        fireEvent.click(targetButton);

        // El uso de 'heading' representa las etiquetas 'h', el 'level 2' seria el 'h2'
        const counterNumber = screen.getByRole('heading', { level: 2 });
        expect(counterNumber.textContent).toBe('4');

        expect(container).toMatchSnapshot();
    })
});
