package com.testmodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

//import com.facebook.react.bridge.WritableArray;
//import com.facebook.react.bridge.Arguments;


public class testmodule extends ReactContextBaseJavaModule {
    public testmodule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "testmodule";
    }

    @ReactMethod
    public void callableThing(final Callback callback) {
        try {
            String value = "hey hey MF";
            callback.invoke("test", value);

        }
        catch (Exception e) {
            callback.invoke("Error", null);
        }
    }
}
