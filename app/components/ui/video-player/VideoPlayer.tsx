import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'
import s from './VideoPlayer.module.scss'
import cn from 'classnames'
import MaterialIcon from '../MaterialIcon'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, videoRef, video } = useVideo()
	const { user } = useAuth()

	return (
		<div
			className={cn(s.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={s.video}
						src={`${videoSource}#t=8`}
						preload='metadata'
					/>

					<div className={s.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={s.progressBar}
						/>
					</div>

					<div className={s.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name='MdHistory' />
							</button>

							<button onClick={actions.toggleVideo} className={s.playButton}>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.forward}>
								<MaterialIcon name='MdUpdate' />
							</button>

							<div className={s.timeControls}>
								<p className={s.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={s.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name='MdFullscreen' />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

export default VideoPlayer
