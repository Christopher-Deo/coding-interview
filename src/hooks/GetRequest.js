const getActivity = async () => {
    // axios.get request to Bored Panda Api
    const activity = await axios.get("https://www.boredapi.com/api/activity");
    //setting response into state using rest operator and key with state
    setActivityList([...activityList, activity.data]);
    //resets button to allow click again
    // setDisableButton(false);
};

