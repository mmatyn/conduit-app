import { render, screen } from "@testing-library/react"
import { Footer } from "../../../../app/Footer/Footer";

describe('Footer component should', () => {
    it('display a conduit link and an attribution', async () => {
        render(<Footer />);

        expect(await screen.findByText('conduit')).toBeInTheDocument();
        expect(await screen.findByText('An interactive learning project from Thinkster. Code & design licensed under MIT.'));
    });
})