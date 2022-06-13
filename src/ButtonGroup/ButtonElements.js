import {FaGithub, FaPhone} from 'react-icons/fa';
import {SiGmail, SiLinkedin} from 'react-icons/si';
import styled from 'styled-components'

export const Icon1 = styled(FaGithub)`
size: 30px;
margin-right: 50px;
color: #545454;
font-size:15px;
&:hover {
    cursor: pointer;
}
`;
export const Icon2 = styled(SiGmail)`
color: #BB001B;
margin-left: 125px;
font-size: 30px;
&:hover {
    cursor: pointer;
}
`;
export const Icon3 = styled(SiLinkedin)`
margin-right: 0px;
color: #0e76a8;
font-size:30px;
&:hover {
    cursor: pointer;
}
`;
export const Icon4 = styled(FaPhone)`
color: #c2c2c2;
font-size:26px;
margin-left: 125px;
&:hover {
    cursor: pointer;
}
`;