const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const config = {
    user: 'nikita49',
    // eslint-disable-next-line
    password: require('./keys').sshKey,
    host: 'coil.server-dns.name',
    port: 21,
    localRoot: `${__dirname}/build`,
    remoteRoot: '/www/vesnyantseva.com',
    include: ['*', '**/*'],
    exclude: ['dist/**/*.map', 'node_modules/**', 'node_modules/**/.*', '.git/**'],
    deleteRemote: false,
    forcePasv: true,
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err));
