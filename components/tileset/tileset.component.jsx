import { TilesetWrapper } from './tileset.styles';
import Tile from '../tile/tile.component';

const Tileset = ({ tiles }) => {
    return (
        <TilesetWrapper>
            {
                tiles.map(tile => {
                    const { src, alt } = tile;
                    return <Tile src={src} alt={alt} />
                })
            }
        </TilesetWrapper>
    )
};

export default Tileset;