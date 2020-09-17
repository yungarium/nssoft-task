import React from "react";
import { withRouter } from "react-router";

import styles from "./styles.module.css";

class DashboardWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: null
        };
    }

    render() {
        return (
            <div className={styles['dashboard']}>
                <div>
                    <h3 className={styles['header']}>Artworks</h3>
                    {this.renderArtworksList()}
                </div>
                {this.renderSpotLight()}
            </div>
        );
    }

    renderArtworksList() {
        return this.props.artworks.map(artwork => (
            <div
                key={artwork._id}
                className={styles[this.state.currentId === artwork._id ? 'active-artwork-row' : 'artwork-row']}
                onClick={() => this.setState({ currentId: artwork._id })}
            >
                <div
                    className={styles['artwork-avatar']}
                    style={{
                        backgroundImage: `url(/imgs/artworks/${artwork._id}.jpg)`
                    }}
                />
                <span>{artwork.title}</span>
            </div>
        ));
    }

    renderSpotLight() {
        const props = this.props;
        const selectedArtworkId = this.state.currentId;
        if (!selectedArtworkId) {
            return null;
        }
        const artworkInSpotlight = props.artworks.find(
            artworks => artworks._id === selectedArtworkId
        );
        const imgUrl = `imgs/artworks/${artworkInSpotlight._id}.jpg`;
        return (
            <div className={styles['spotlight']}>
                <div
                    className={styles['spotlight-img']}
                    style={{
                        backgroundImage: `url(${imgUrl})`
                    }}
                />
                <div className={styles['spotlight-label']}>{artworkInSpotlight.title}</div>
            </div>
        );
    }
}

export default withRouter(DashboardWorks);
