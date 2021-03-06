import React from 'react';
import PropTypes from 'prop-types';
import { View, PanResponder, Dimensions } from 'react-native';

export const GESTURES = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT',
};

class Gesture extends React.Component {

  componentWillMount() {
    const {
      onSwipeShouldAllow,
      onSwipeStarted,
      onSwipeUpStarted,
      onSwipeDownStarted,
      onSwipeLeftStarted,
      onSwipeRightStarted,
      onSwiping,
      onSwipingUp,
      onSwipingDown,
      onSwipingLeft,
      onSwipingRight,
      onRelease,
      onSwipeUpRelease,
      onSwipeDownRelease,
      onSwipeLeftRelease,
      onSwipeRightRelease,
    } = this.props;

    const { height, width } = Dimensions.get('window');
    this.touchXStart = undefined;
    this.touchYStart = undefined;

    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponderCapture: (e) => {
        this.touchXStart = e.nativeEvent.pageX;
        this.touchYStart = e.nativeEvent.pageY;
      },

      onMoveShouldSetPanResponderCapture: (e, { dx, dy, moveX, moveY }) => {
        if (dy > -3 && dy < 3 && dx > -3 && dx < 3) {
          return false;
        }

        if ((this.touchXStart > 60 && this.touchXStart < width - 60) &&
          (this.touchYStart > 100 && (this.touchYStart < height - 60))) {
          return false;
        }

        return onSwipeShouldAllow();
      },

      onPanResponderGrant: () => {

      },

      onPanResponderMove: (e, gestureState) => {
        const {
          dy, dx, moveX, moveY, x0, y0,
        } = gestureState;

        if (!this.gesture && (Math.abs(dy) > 3 || Math.abs(dx) > 3)) {
          const angle = Math.atan2(moveY - y0, moveX - x0) * 180 / Math.PI;

          if (angle > 45 && angle <= 135) {
            this.gesture = GESTURES.SWIPE_DOWN;
            onSwipeDownStarted(gestureState);
          }
          if (angle >= 135 && angle <= 180 || angle < -135 && angle >= -180) {
            this.gesture = GESTURES.SWIPE_LEFT;
            onSwipeLeftStarted(gestureState);
          }
          if (angle < -45 && angle >= -135) {
            this.gesture = GESTURES.SWIPE_UP;
            onSwipeUpStarted(gestureState);
          }
          if (angle > -45 && angle <= 45) {
            this.gesture = GESTURES.SWIPE_RIGHT;
            onSwipeRightStarted(gestureState);
          }

          onSwipeStarted(this.gesture, gestureState);
        }

        if (this.gesture) {
          switch (this.gesture) {
            case GESTURES.SWIPE_UP: {
              onSwipingUp(gestureState);
              break;
            }

            case GESTURES.SWIPE_DOWN: {
              onSwipingDown(gestureState);
              break;
            }

            case GESTURES.SWIPE_LEFT: {
              onSwipingLeft(gestureState);
              break;
            }

            case GESTURES.SWIPE_RIGHT: {
              onSwipingRight(gestureState);
              break;
            }
          }

          onSwiping(this.gesture, gestureState);
        }
      },

      onPanResponderRelease: (e, gestureState) => {
        if (this.gesture === GESTURES.SWIPE_UP) {
          onSwipeUpRelease(gestureState);
        } else if (this.gesture === GESTURES.SWIPE_DOWN) {
          onSwipeDownRelease(gestureState);
        } else if (this.gesture === GESTURES.SWIPE_LEFT) {
          onSwipeLeftRelease(gestureState);
        } else {
          onSwipeRightRelease(gestureState);
        }

        onRelease(gestureState, this.gesture);
        this.gesture = null;
      },
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.panResponder.panHandlers}>
        {this.props.children}
      </View>
    );
  }
}

Gesture.propTypes = {
  onSwipeShouldAllow: PropTypes.func,
  onSwipeStarted: PropTypes.func,
  onSwipeDownStarted: PropTypes.func,
  onSwipeUpStarted: PropTypes.func,
  onSwipeRightStarted: PropTypes.func,
  onSwipeLeftStarted: PropTypes.func,
  onSwiping: PropTypes.func,
  onSwipingDown: PropTypes.func,
  onSwipingUp: PropTypes.func,
  onSwipingRight: PropTypes.func,
  onSwipingLeft: PropTypes.func,
  onSwipeUpRelease: PropTypes.func,
  onSwipeDownRelease: PropTypes.func,
  onSwipeLeftRelease: PropTypes.func,
  onSwipeRightRelease: PropTypes.func,
  onRelease: PropTypes.func,
};

Gesture.defaultProps = {
  onSwipeShouldAllow: () => true,
  onSwipeStarted: () => {},
  onSwipeDownStarted: () => {},
  onSwipeUpStarted: () => {},
  onSwipeRightStarted: () => {},
  onSwipeLeftStarted: () => {},
  onSwiping: () => {},
  onSwipingDown: () => {},
  onSwipingUp: () => {},
  onSwipingRight: () => {},
  onSwipingLeft: () => {},
  onSwipeUpRelease: () => {},
  onSwipeDownRelease: () => {},
  onSwipeLeftRelease: () => {},
  onSwipeRightRelease: () => {},
  onRelease: () => {},
};

export default Gesture;
