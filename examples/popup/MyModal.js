import React from 'react';
import Modal from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Screenfull from '../../src/Screenfull';

class MyModal extends React.Component {
  state = {
    open
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  renderModal() {
    return this.state.open ? (
      <Modal open={this.state.open} onClose={this.handleToggle}>
        <Screenfull forceFullScreen />
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="subheading" id="simple-modal-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            fringilla, nibh et maximus vehicula, tellus justo vulputate leo,
            dictum suscipit quam lacus sed tellus. Nam non erat et diam
            hendrerit sollicitudin vitae id neque. Cras aliquet vestibulum dui.
            Fusce eget justo eu ligula tempus elementum at vitae metus. Morbi at
            mi congue, lobortis nulla vitae, aliquet elit. Pellentesque sodales
            volutpat tellus, nec pharetra metus commodo sed. Aliquam in gravida
            odio, et commodo purus. Integer sit amet mauris nulla. Phasellus a
            scelerisque diam. In auctor urna non metus tristique, sit amet
            accumsan justo hendrerit. Phasellus vestibulum risus massa, in
            interdum orci ultrices at. Vivamus eros lacus, fringilla nec
            ullamcorper ut, dictum non orci. Donec a turpis tincidunt, malesuada
            nisl vitae, ullamcorper sapien. Morbi faucibus laoreet mauris, vel
            porta sem pharetra quis. Proin vel arcu tempor, feugiat nunc a,
            malesuada nibh. Morbi turpis dui, commodo quis auctor pellentesque,
            tempus sed ligula. Sed rutrum ornare justo, ac elementum nulla
            iaculis nec. Quisque ut consequat quam. Nam auctor, leo pretium
            dictum vestibulum, metus purus rutrum neque, et tempus libero nunc
            vitae ex. Curabitur enim erat, maximus eget orci sit amet,
            ullamcorper ornare libero. Suspendisse potenti. Praesent egestas
            laoreet massa sed aliquam. Pellentesque id eros dapibus, aliquet
            mauris ac, sagittis mauris. Integer tincidunt ligula sed dictum
            sollicitudin. Aliquam tincidunt urna at tristique porttitor. Nam
            ultricies efficitur est sit amet auctor. Aliquam placerat, eros quis
            fringilla sodales, tellus sem faucibus urna, vel commodo lectus
            ligula a est. Proin arcu risus, scelerisque eu feugiat a, iaculis eu
            arcu. Proin malesuada pellentesque aliquam. Sed condimentum semper
            malesuada. Nunc risus enim, dictum in massa eget, commodo facilisis
            ipsum. Cras dignissim velit eget auctor tempus. Sed dui arcu,
            pellentesque sit amet dignissim et, suscipit quis magna. Vestibulum
            quis libero eget dolor vulputate malesuada vitae sed eros. Fusce ut
            erat semper magna pretium malesuada. Suspendisse ullamcorper massa
            lacinia iaculis lacinia. Etiam fringilla orci non eros rutrum
            scelerisque.
          </Typography>
          <SimpleModalWrapped />
        </div>
      </Modal>
    ) : null;
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        {this.renderModal()}
      </div>
    );
  }
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(MyModal);
