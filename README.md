# Container Escape Exploit
This is a container escape exploit that uses the docker daemon to escape from a container. It is based on the [CVE-2022-0492](https://nvd.nist.gov/vuln/detail/CVE-2022-0492) exploit. It is a proof of concept and should not be used in production. 
To plant the malicous bash sript on the container and execute it, the ImageTragick [CVE-2016-3714](https://nvd.nist.gov/vuln/detail/CVE-2016-3714) exploit is used.

**Please note that this exploit changes your host system. It is not recommended to use this exploit on a production system.**
## Preconditions
The exploit requires the following preconditions:
- The host is using the kernel version 5.17.0-rc2 or older
- The container needs to be running with the `--privileged` flag (or run with 'SYS_ADMIN' capability and lack an AppArmor profile, also the cgroup v1 virtual filesystem needs to be mounted)
## Repo Structure
In the ImageTragick folder, all files to build a vulnerable docker image are located. It uses the node:6.1.0-wheezy image as a base image and creates a webserver that allows for fileuploads. The rce1.jpg file is the malicious file that is uploaded to the container. The Dockerfile is the file that builds the image.
## How to get running
To get the exploit running, the following steps need to be taken:
- Build the image with `docker build -t container_escape .` and run it with `docker run -d -p 80:80 --privileged container_escape`
    - The image is also available on [Docker Hub](https://hub.docker.com/repository/docker/sgtmate/container_escape)
- Open your browser and navigate to `http://localhost:80`
- Upload the rce1.jpg file
- Wait for the exploit to run and the container to escape
- Now your host system is compromised and after a restart you will see an image pop up on your screen
