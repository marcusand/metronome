export const decodeAudioBuffer = async (
	audioContext: AudioContext,
	buffer: ArrayBuffer
): Promise<AudioBuffer> =>
	new Promise((resolve, reject) => {
		audioContext.decodeAudioData(buffer, resolve, reject);
	});
