import { StyledButton } from "./styles";

export const Button = ({ children, ...props }: any) => (
	<StyledButton type="submit" {...props}>
		{children}
	</StyledButton>
);
