module.exports = {
    app: {
        px: 'cm!',
        token: 'OTYwNzM3NDYyMjI3OTcyMTE2.YkuyfA.THcCLB-coRKeLLUU1f0zMKW2nr4',
        playing: 'music all day ye yee'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
