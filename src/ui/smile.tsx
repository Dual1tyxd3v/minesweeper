import { useSelector } from 'react-redux';
import { getGameStatus } from '../store/store';

export default function Smile() {
  const gameStatus = useSelector(getGameStatus);
  return (
    <>
      {gameStatus === 'playing' && (
        <svg
          width="100%"
          height="100%"
          viewBox="-102.4 -102.4 1228.80 1228.80"
          fill="#000000"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(112.63999999999999,112.63999999999999), scale(0.78)"
          >
            <rect
              x="-102.4"
              y="-102.4"
              width="1228.80"
              height="1228.80"
              rx="614.4"
              fill="#ffff00"
              strokeWidth="0"
            />
          </g>

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M324.8 440c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4z m374.4 0c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4zM340 709.6C384 744 440.8 764.8 512 764.8s128-20.8 172-55.2c26.4-21.6 42.4-42.4 50.4-58.4 6.4-12 0.8-27.2-11.2-33.6s-27.2-0.8-33.6 11.2c-0.8 1.6-3.2 6.4-8 12-7.2 10.4-17.6 20-28.8 29.6-34.4 28-80.8 44.8-140.8 44.8s-105.6-16.8-140.8-44.8c-12-9.6-21.6-20-28.8-29.6-4-5.6-7.2-9.6-8-12-6.4-12-20.8-17.6-33.6-11.2s-17.6 20.8-11.2 33.6c8 16 24 36.8 50.4 58.4z"
              fill=""
            />

            <path
              d="M512 1010.4c-276.8 0-502.4-225.6-502.4-502.4S235.2 5.6 512 5.6s502.4 225.6 502.4 502.4-225.6 502.4-502.4 502.4zM512 53.6C261.6 53.6 57.6 257.6 57.6 508s204 454.4 454.4 454.4 454.4-204 454.4-454.4S762.4 53.6 512 53.6z"
              fill=""
            />
          </g>
        </svg>
      )}
      {gameStatus === 'lose' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 256 256"
        >
          <g
            style={{
              stroke: 'none',
              strokeWidth: '0',
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '10',
              fill: 'rgb(255,255,0)',
              fillRule: 'nonzero',
              opacity: '1',
            }}
            transform="translate(0 0) scale(2.81 2.81)"
          >
            <circle
              cx="45"
              cy="45"
              r="45"
              style={{
                stroke: 'none',
                strokeWidth: '1',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                fill: 'rgb(255,255,0)',
                fillRule: 'nonzero',
                opacity: '1',
              }}
              transform="  matrix(1 0 0 1 0 0) "
            />
          </g>
          <g
            style={{
              stroke: 'none',
              strokeWidth: '0',
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: '10',
              fill: 'none',
              fillRule: 'nonzero',
              opacity: '1',
            }}
            transform="translate(1.6034642746674876 1.6034642746674876) scale(2.81 2.81)"
          >
            <path
              d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 s 41 -18.393 41 -41 S 67.607 4 45 4 z"
              style={{
                stroke: 'none',
                strokeWidth: '1',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                fill: 'rgb(0,0,0)',
                fillRule: 'nonzero',
                opacity: '1',
              }}
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <circle
              cx="31"
              cy="35.55"
              r="5"
              style={{
                stroke: 'none',
                strokeWidth: '1',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                fill: 'rgb(0,0,0)',
                fillRule: 'nonzero',
                opacity: '1',
              }}
              transform="  matrix(1 0 0 1 0 0) "
            />
            <circle
              cx="59"
              cy="35.55"
              r="5"
              style={{
                stroke: 'none',
                strokeWidth: '1',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                fill: 'rgb(0,0,0)',
                fillRule: 'nonzero',
                opacity: '1',
              }}
              transform="  matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 63.087 69.345 c -0.647 0 -1.283 -0.313 -1.668 -0.894 c -3.671 -5.529 -9.809 -8.83 -16.419 -8.83 s -12.749 3.301 -16.418 8.83 c -0.611 0.92 -1.852 1.173 -2.772 0.56 c -0.92 -0.61 -1.171 -1.852 -0.561 -2.772 C 29.662 59.59 37.046 55.621 45 55.621 s 15.338 3.969 19.751 10.617 c 0.611 0.921 0.36 2.162 -0.56 2.772 C 63.851 69.237 63.467 69.345 63.087 69.345 z"
              style={{
                stroke: 'none',
                strokeWidth: '1',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                fill: 'rgb(0,0,0)',
                fillRule: 'nonzero',
                opacity: '1',
              }}
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}
      {gameStatus === 'win' && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--emojione"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M32 2c16.6 0 30 13.4 30 30S48.6 62 32 62S2 48.6 2 32S15.4 2 32 2"
            fill="#FFFF00"
          ></path>
          <path
            d="M35.8 20.5c-2.2 1.1-5.5 1.1-7.7 0c-2.3-1.2-5.2-2-8.7-2.3c-3.4-.3-10.5-.3-14 1c-.4.1-.8.3-1.2.5c-.1.1-.2.2-.2.6v.5c0 1-.1.6.6 1c1.4.8 2.2 2.9 2.6 5.8c.6 4.2 2.7 6.9 6 8.1c3.1 1.2 6.6 1.1 9.7-.1c1.7-.7 3.2-1.7 4.4-3.5c2.1-3 1.4-4.9 2.5-7.5c.9-2.3 3.5-2.3 4.5 0c1.1 2.6.4 4.5 2.5 7.5c1.2 1.7 2.7 2.8 4.4 3.5c3.1 1.2 6.6 1.3 9.7.1c3.4-1.3 5.4-3.9 6-8.1c.4-2.9 1.2-5 2.6-5.8c.7-.4.6 0 .6-1v-.5c0-.4 0-.5-.3-.6c-.4-.2-.8-.4-1.2-.5c-3.6-1.3-10.7-1.3-14-1c-3.5.3-6.4 1.1-8.8 2.3"
            fill="#000"
          ></path>
          <path
            d="M44.6 42.3c-8.1 5.7-17.1 5.6-25.2 0c-1-.7-1.8.5-1.2 1.6c2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"
            fill="#000"
          ></path>
        </svg>
      )}
    </>
  );
}
