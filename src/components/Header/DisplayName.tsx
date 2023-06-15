export default function DisplayName({ username }: { username: string }) {
    return (
        <a id="displayName" className="userDisplay">{username}</a>
    );
};