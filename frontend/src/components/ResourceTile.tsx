interface Props {
    resourceData: any;
    index: number;
}

function ResourceTile({ resourceData, index }: Props){
    console.log(resourceData);
    return (
        <div key={index}>
            <h1>{resourceData.title}</h1>
            <p>{resourceData.body}</p>
            <p><em>Author: {resourceData.author}</em></p>
        </div>
    );
}

export default ResourceTile
