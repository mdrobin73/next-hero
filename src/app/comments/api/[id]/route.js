export async function PATCH(request, {params}) {

    // console.log(typeof(params.id));
    const body = await request.json();
    const comment = comments.findIndex((comment) => comment.id === parseInt(params.id));
    comments[comment] = {
        text: body.text
    }

    return Response.json({
        message: "Comment updated by route again",
        comments
    })
}

export async function DELETE(request, {params}) {
    const newComments = comments.filter((comment) => comment.id !== parseInt(params.id));

    return Response.json({
        message: "comment deleted",
        newComments
    })
}


const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 2"
    },
    {
        id: 3,
        text: "Comment 3"
    },
]