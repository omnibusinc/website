import Shell from "../../components/shell/shell.component";
import Angular from '../../assets/tech/angular.png';
import AWS from '../../assets/tech/aws.png';
import AWSLambda from '../../assets/tech/aws-lambda.png';
import CSharp from '../../assets/tech/c-sharp.png';
import Javascript from '../../assets/tech/javascript.png';
import MongoDB from '../../assets/tech/mongodb.png';
import PHP from '../../assets/tech/php.png';
import PosegreSQL from '../../assets/tech/postgresql.png';
import Python from '../../assets/tech/python.png';
import ReactLogo from '../../assets/tech/react.png';
import ReactNative from '../../assets/tech/react-native.png';
import Redis from '../../assets/tech/redis.svg';
import Serverless from '../../assets/tech/serverless.png';
import SQLServer from '../../assets/tech/sql-server.svg';
import Typescript from '../../assets/tech/typescript.png';
import Tileset from "../../components/tileset/tileset.component";

const tiles = [
    { src: Angular, alt: 'Angular' },
    { src: AWS, alt: 'AWS' },
    { src: AWSLambda, alt: 'AWS Lambda' },
    { src: CSharp, alt: 'C Sharp'},
    { src: Javascript, alt: 'Javascript' },
    { src: MongoDB, alt: 'mongoDB' },
    { src: PHP, alt: 'PHP' },
    { src: PosegreSQL, alt: 'PostgreSQL' },
    { src: Python, alt: 'Python' },
    { src: ReactLogo, alt: 'React' },
    { src: ReactNative, alt: 'React Native' },
    { src: Redis, alt: 'Redis' },
    { src: Serverless, alt: 'Serverless' },
    { src: SQLServer, alt: 'SQL Server' },
    { src: Typescript, alt: 'Typescript' },
];

const Technologies = () => {

    return (
        <Shell>
            <Tileset tiles={tiles} />
        </Shell>
    )
};

export default Technologies;        