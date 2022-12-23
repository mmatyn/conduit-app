import { render, screen } from "@testing-library/react";
import { Banner } from "../../../../app/HomePage/Banner/Banner";

describe('Banner component should' , () =>{
    it('display "conduit" and "A place to share your knowleged."', async () => {
        render(<Banner/>);

        expect(await screen.findByText('conduit')).toBeInTheDocument();
        expect(await screen.findByText('conduit')).toHaveClass("logo-front");
        expect(await screen.findByText('A place to share your knowleged.')).toBeInTheDocument();
    })
});