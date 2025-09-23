'use client'
import React, { useActionState, useState } from 'react'
import { form } from 'sanity/structure'
import {
    startupForm, startupFormLabel, startupFormInput,
    startupFormError, startupFormTextarea, startupFormBtn
} from '@/app/tailwindClassNames'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react'


const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("123");

    const handleFormSubmit = () => { }
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL",
    });


    return (
        <form action={() => { }} className={startupForm}>
            <div>
                <label htmlFor="title" className={startupFormLabel}>Title</label>
                <Input id="title"
                    name='title'
                    className={startupFormInput}
                    required placeholder='Startup Title'
                />
                {errors.title && <p className={startupFormError}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="description" className={startupFormLabel}>DESCRIPION</label>
                <Textarea id="description" className={startupFormTextarea}
                    required placeholder='DESCRIPION'
                />
                {errors.title && <p className={startupFormError}>{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="Category" className={startupFormLabel}>Category</label>
                <Input id="Category" className={startupFormInput}
                    required placeholder='Category'
                />
                {errors.Category && <p className={startupFormError}>{errors.Category}</p>}
            </div>
            <div>
                <label htmlFor="link" className={startupFormLabel}>link</label>
                <Input id="link"
                    name='link'
                    className={startupFormInput}
                    required placeholder='linklinklinklink'
                />
                {errors.link && <p className={startupFormError}>{errors.link}</p>}
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className={startupFormLabel}>Pitch</label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder:
                            "Briefly describe your idea and what problem it solves",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                />
            </div>
            <Button
                type="submit"
                className={startupFormBtn}
                disabled={isPending}
            >
                {isPending ? "Submitting..." : "Submit Your Pitch"}
                <Send className="size-6 ml-2" />
            </Button>
        </form >
    )
}

export default StartupForm
function handleFormSubmit(state: { error: string; status: string }): { error: string; status: string } | Promise<{ error: string; status: string }> {
    throw new Error('Function not implemented.')
}

