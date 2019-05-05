## Docker for macOS

Download the docker image from [here](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

1. Double-click Docker.dmg to open the installer, then drag Moby the whale to the Applications folder.
2. Double-click Docker.app in the Applications folder to start Docker. 
3. You are prompted to authorize Docker.app with your system password after you launch it. Privileged access is needed to install networking components and links to the Docker apps.

For more deatils visit this [link](https://docs.docker.com/docker-for-mac/install/)

--------------

## Docker for Ubuntu

You should have at least Ubuntu 16.04.

1. Uninstall if there is an old installation

```
     sudo apt remove docker docker-engine docker.io containerd runc
```

2. Update the sources

```
    sudo apt-get update
```

3. Install the following packages

```
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common

```

4. Add Docker’s GPG key to your system

```
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

5. Then add the stable repository to your sources

```
    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
```

6. Time to update again the packages and then install Docker

```
    sudo apt-get update && sudo apt-get install docker-ce
```

7. Verify if it works with

```
    sudo docker run hello-world
```

Awesome! Now let’s use Docker as a non-root user with the following command

**replace your-user with your actual username!**
```
    sudo usermod -aG docker your-user
```

Now try: `docker run hello-world`