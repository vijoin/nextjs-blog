import Image from 'next/image';

const ProfilePicture = () => (
    <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Victor Inojosa"
    />);

export default ProfilePicture;