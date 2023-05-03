import { useContext } from "react"
import { Button, FormControl, FormLabel, Input, Icon, IconButton, InputRightElement } from "@chakra-ui/react"
import AuthContext from "../context/Auth/AuthWrapper"

const Login = () => {

    const {details, handleSubmit, handlePassVisibility, dispatch} = useContext(AuthContext);

    return (
        <FormControl onSubmit={handleSubmit}>
        <FormLabel>Email address</FormLabel>
        <Input 
            type='email' 
            placeholder="peter@gmail.com"
            onChange={(e) => dispatch({...details, email: e.target.value})}
            />
        <FormLabel>Password</FormLabel>
        <Input 
            type={showPassword ? 'text' : 'password'}
            placeholder="*******"
            onChange={e => dispatch(e.currentTarget.value)}
            />
        <InputRightElement width="3em">
            <IconButton h="1.5rem" size="sm" onClick={handlePassVisibility}>
            {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
            </IconButton>
        </InputRightElement>
        <Button width="full" variantColor="blue" variant="outline" mt={4} type="submit" colorScheme="blue">Log in</Button>
        </FormControl>
    )
}

export default Login

/*
*/
