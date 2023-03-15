import React from "react";
import {screen, render} from "@testing-library/react";

import Avatar from "./Avatar";
import {avatarPropsMock} from "./Avatar.mocks";

describe(Avatar.name, () => {
    it("should render the user's initials", () => {
        render(<Avatar nickname={avatarPropsMock.nickname} />);
        expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("should render provided avatar image", () => {
        const {container} = render(<Avatar {...avatarPropsMock} />);
        const image = container.querySelector("img");
        expect(image).toBeInTheDocument();
    });
});
